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

        console.log("I would like " + howMany + food);
    `}>
      <ul className="list list-disc space-y-4 text-xl">
        <li>Use a string when you want to write out something: letters, words, spaces, numbers, symbols like <code>! @ # $ % ^ & * ( ) - =</code></li>
        <li>Strings are set between single quotes, double quotes, or backticks</li>
        <code>
          const string2 = 'a';<br/>
          const string1 = "b";<br/>
          const string3 = `c`;
        </code>
      </ul>
      <ul className="list list-disc space-y-4 text-xl">
        <li>Strings can be concatenated (meaning: put together) using <code>+</code></li>
        <li>Strings can be concatenated with a variable</li>
        <li>If the variable is not yet a string, it will be converted to one</li>
      </ul>
    </SplitWithEditor>
  </>;
}
