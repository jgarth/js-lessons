import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Functions"
      subtitle="Return"
      prevLessonLink="/lessons/04-functions-args"
      nextLessonLink="/lessons/06-functions-arrow-notation"
    />
    <SplitWithEditor leftWidth="40%" rightWidth="60%" initialCode={`
      function doubleNumber(number) {
        const result = number * 2;
      }

      let number = doubleNumber(2);
      console.log(number);

      number = doubleNumber(3);
      console.log(number);
    `}>
      <p>
        You can use function return values when you want to
        do more with the result of your function&apos;s steps.
      </p>
      <p>To add a return to a function:</p>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          go to the last line of the function body
          inside the curly braces
        </li>
        <li>
          add the <ColorClick colorClass="bg-yellow-700" clicked><code>return</code></ColorClick> keyword
        </li>
        <li>
          add your <ColorClick colorClass="bg-green-700" clicked>return value</ColorClick>
        </li>
      </ul>
      <code className="text-xl">
        function doubleNumber (number) &#123;<br/>
        &nbsp;&nbsp;<ColorClick colorClass="bg-yellow-700">return</ColorClick> <ColorClick colorClass="bg-green-800">number * 2</ColorClick>;
        <br/>
        &#125;
      </code>
    </SplitWithEditor>
  </>;
}
