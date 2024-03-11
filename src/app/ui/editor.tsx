import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useState, useCallback, useEffect } from 'react';

const extensions = [javascript({ jsx: true })];

// Unindent a string with unknown base indentation
const unindent = (string) => {
  const lines = string.split('\n');

  // Filter out empty lines and map to get the leading spaces count for each line
  const indentLengths = lines
  .filter(line => line.trim().length > 0)
  .map(line => line.match(/^(\s*)/)[0].length);

  const minIndent = Math.min(...indentLengths);

  // Remove the minimum indentation from each line and return the unindented string
  return lines.map(line => line.substring(minIndent)).join('\n');
}

// Remove leading and trailing blank lines
const trim = (string) => {
  return string.replace(/^\s*\n|\n\s*$/g, '');
}

export default function Editor({ children, className }) {
  const initialCode = unindent(trim(
    children
  ));
  const [value, setValue] = useState(initialCode);
  const [result, setResult] = useState();
  const [error, setError] = useState();

  const runCode = (code) => {
    setError(null);
    try {

      // Skip if code entered ends with . or has unbalanced curly braces
      if (code.endsWith('.')) { return }

      let evalResult = "";

      // FIXME: Use something like nodeJS util.format here
      const format = (...args) => {
        return args.map(arg => {
          if (typeof arg === 'object') {
            try {
              // Attempt to use JSON.stringify for object representation
              return JSON.stringify(arg);
            } catch (error) {
              // Handle circular references or other stringify errors
              return "Cannot format object";
            }
          } else {
            // Use toString for primitives for simplicity
            return String(arg);
          }
        }).join(' ');
      };
      const fakeConsole = {
        log: (...args) => evalResult += (format(...args) + '\n'),
      };

      // ?. leads to 'indirect eval'
      eval?.(`(console) => {
        ${code}
      }`)(fakeConsole);
      setResult(evalResult);
    } catch(e) {
      setResult(null);
      setError(e.toString());
    }
  };

  const onChange = useCallback((val, viewUpdate) => {
    const cleaned = unindent(trim(val));
    setValue(cleaned);
  }, []);

  useEffect(() => runCode(value), [value]);

  return (
    <div className={`flex flex-col justify-between p-8 gap-8 ${className}`}>
      <div className="h-1/2 mb-4">
        <div>
          <p className="mb-2">Code</p>
        </div>
        <div className="bg-[#282A36] py-2 rounded-lg overflow-scroll max-h-full">
          <CodeMirror
            value={value}
            height="100%"
            className="rounded-lg"
            style={{ height: "100%", fontSize: '20px' }}
            theme={dracula}
            extensions={extensions}
            onChange={onChange}
            />
        </div>
      </div>
      <div className="h-1/2 flex flex-col">
        <div>
          <p className="mb-2">Output</p>
        </div>
        <pre className="px-9 py-4 bg-[#282A36] text-xl text-wrap font-mono self-stretch h-full rounded-lg">
          { error &&
            error
          }
          { !error &&
            result
          }
        </pre>
      </div>
    </div>
  );
}
