import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Functions"
      subtitle="Arguments"
      prevLessonLink="/lessons/03-functions-basic"
      nextLessonLink="/lessons/05-functions-return"
    />
    <SplitWithEditor leftWidth="50%" rightWidth="50%" initialCode={`
      function introduce() {
        console.log("Hi, my name is.");
        console.log("My favorite food is.");
      }

      introduce("Josh", "tacos");
    `}>
      <p>
        You can use function arguments when you want to
        repeat <b>similar</b> steps multiple times.
      </p>
      <p>To add arguments to a function:</p>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          start after the <span className="bg-orange-700 p-1">function name</span>,
          inside the <span className="bg-purple-700 p-1">parentheses</span>
        </li>
        <li>
          add <span className="bg-yellow-700 p-1">argument names</span>
        </li>
        <li>
          separate multiple arguments with <span className="bg-blue-700 p-1">commas</span>
        </li>
      </ul>
      <code className="text-xl">
        function
        <ColorClick colorClass="bg-orange-700">sayFavoriteFoods</ColorClick>
        <ColorClick colorClass="bg-purple-700">(</ColorClick>
        <ColorClick colorClass="bg-yellow-700">food1</ColorClick>
        <ColorClick colorClass="bg-blue-700">,</ColorClick>
        <ColorClick colorClass="bg-yellow-700">food2</ColorClick>
        <ColorClick colorClass="bg-purple-700">)</ColorClick>
        &#123;<br/>
        &nbsp;&nbsp;console.log(&quot;I like &quot; + food1 + &quot; and &quot; + food2);
        <br/>
        &#125;
      </code>
      <div className="space-y-1 p-8 absolute inset-x-0 bottom-0 text-xs hover:opacity-100 opacity-0">
        <p>Quiz</p>
        <p>What happens if you give a function call more arguments?</p>
        <p>What happens if you give a function call less arguments?</p>
      </div>
    </SplitWithEditor>
  </>;
}
