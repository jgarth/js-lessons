import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Functions"
      subtitle="Arrow functions"
      prevLessonLink="/lessons/05-functions-return"
      nextLessonLink="/lessons/07-functions-challenge"
    />
    <SplitWithEditor leftWidth="50%" rightWidth="50%" initialCode={`
      function double(number) {
        const result = number * 2;
        return number;
      }
    `}>
      <p>
        There's a second way to define a function, using <u>arrow notation</u>.
      </p>
      <p>To write a function using arrow notation:</p>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          start with parentheses and arguments: <ColorClick colorClass="bg-red-700 p-1" clicked>
            <code className="text-white">()</code>
          </ColorClick>
        </li>
        <li>
          use the <u>arrow</u> operator: <ColorClick colorClass="bg-orange-700 p-1" clicked>=&gt;</ColorClick>
        </li>
        <li>
          add <ColorClick colorClass="bg-blue-700 p-1" clicked>curly braces</ColorClick> and
          write the <ColorClick colorClass="bg-green-700 p-1" clicked>function body</ColorClick> inside the curly braces.
        </li>
      </ul>
      <code className="text-xl">
        <ColorClick colorClass="bg-red-700">(number)</ColorClick>
        <ColorClick colorClass="bg-orange-700">=&gt;</ColorClick>
        <ColorClick colorClass="bg-blue-700">&#123;</ColorClick><br/>
        <ColorClick colorClass="bg-green-700">
          &nbsp;&nbsp;return number * 2;
        </ColorClick><br/>
        <ColorClick colorClass="bg-blue-700">&#125;</ColorClick><br/>
      </code>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          if your function only does one step, you can skip the curly braces.
          This will automatically return the value from your only step.
        </li>
      </ul>
      <code className="text-xl">
        <ColorClick colorClass="bg-red-700">(number)</ColorClick>
        <ColorClick colorClass="bg-orange-700">=&gt;</ColorClick>
        <ColorClick colorClass="bg-green-700">
          number * 2;
        </ColorClick><br/>
      </code>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          When using arrow notation, the function can be stored in a variable
        </li>
      </ul>
      <code>
        const ourFunction = (number) => number * 2;
        ourFunction(2); // Returns 4
      </code>
    </SplitWithEditor>
  </>;
}
