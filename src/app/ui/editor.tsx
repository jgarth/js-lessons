'use client'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { useState, useCallback, useEffect } from 'react';
import { ArrowUturnLeftIcon, PlayIcon }
  from '@heroicons/react/24/outline'

const extensions = [javascript({ jsx: true })];

// Unindent a string with unknown base indentation
const unindent = (string: string) => {
  const lines: Array<string> = string.split('\n');

  // Filter out empty lines and map to get the leading spaces count for each line
  const indentLengths = lines
    .map((line: string) => (line!.match(/^(\s*)/)[0]?.length || 0));

  const minIndent = Math.min(...indentLengths);

  // Remove the minimum indentation from each line and return the unindented string
  return lines.map(line => line.substring(minIndent)).join('\n');
}

// Remove leading and trailing blank lines
const trim = (string: string) => {
  return string.replace(/^\s*\n|\n\s*$/g, '');
}

interface EditorProps {
  children: React.ReactNode,
  className ?: string,
  style?: {
    width?: string,
    height?: string
  }
}

export default function Editor({ children, className }: EditorProps) {
  const initialCode = unindent(trim(
    children.toString()
  ));
  const [value, setValue] = useState<string>(initialCode);
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<string>();

  const runCode = () => {

    const code = value;

    if(code.match(/alert\s*\(/)) {
      setError("Cannot use function alert() here.");
      return
    }

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
              throw "Error: cannot format object";
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
      setError(null);
      setResult(evalResult);
    } catch(e) {
      setError(e.toString());
      setResult(null);
    }
  };

  const onChange = useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);

  useEffect(() => runCode(), []);

  const resetCode = () => {
    setValue(initialCode);
  }

  return (
    <div className={`flex flex-col justify-between p-8 gap-8 space-y-8 ${className}`}>
      <div className="min-h-[50%] max-h-[50%]">
        <div className="flex flex-row justify-between mb-2 items-center">
          <p className="text-lg">Code</p>
          <div className="flex flex-row items-center justify-between gap-2">
            <button
              onClick={runCode}
              className="text-md py-2 px-4 rounded-lg bg-[#282A36] flex items-center justify-between">
              <PlayIcon className="h-4 w-4 mr-2 text-white" />
              Run
            </button>
            <button
              onClick={resetCode}
              className="text-md py-2 px-4 rounded-lg bg-[#282A36] flex items-center justify-between">
              <ArrowUturnLeftIcon className="h-4 w-4 mr-2 text-white" />
              Reset
            </button>
          </div>
        </div>
        <div className="bg-[#282A36] py-2 rounded-lg overflow-scroll max-h-[100%]">
          <CodeMirror
            value={value}
            height="100%"
            className="rounded-lg my-4"
            style={{ height: "100%", fontSize: '20px' }}
            theme={dracula}
            extensions={extensions}
            onChange={onChange}
            />
        </div>
      </div>
      <div className="h-1/2 flex flex-col gap-4">
        <div>
          <p className="text-lg">Output</p>
        </div>
        <pre className="px-9 py-4 bg-[#282A36] text-xl text-wrap font-mono overflow-scroll h-full rounded-lg">
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
