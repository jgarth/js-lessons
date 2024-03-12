import Headline from '@/app/ui/headline';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="String Concatenation"
      subtitle="Recap"
      prevLessonLink="/lessons/01-variables-recap"
      nextLessonLink="/lessons/03-functions-basic"
    />
    <SplitWithEditor initialCode={`
        const food = "tacos";
        const howMany = 12;

        console.log("I would like ");
    `}>
      <ul className="list list-disc space-y-4 text-xl">
        <li>To concatenate means: to put together, one after another</li>
        <li>Use a string when you want to write out something: letters, words, spaces, numbers, symbols</li>
        <li>Strings are set between single quotes, double quotes, or backticks</li>
        <code>
          const string2 = 'a'; // Single quotes<br/>
          const string1 = "b"; // Double quotes<br/>
          const string3 = `c`; // Backticks
        </code>
      </ul>
      <ul className="list list-disc space-y-4 text-xl">
        <li>Strings can be concatenated using <code>+</code></li>
        <li>Strings can be concatenated with a variable</li>
        <li>If the variable is not yet a string, it will be converted to one</li>
      </ul>
    </SplitWithEditor>
    <div className="space-y-1 p-8 absolute inset-x-0 bottom-0 text-xs hover:opacity-100 opacity-0">
      <p>Quiz</p>
      <p>What happens if you concatenate a string with a number?</p>
      <p>What happens if you concatenate two strings containing numbers?</p>
      <p>What happens if you concatenate a string with null?</p>
    </div>
  </>;
}
