import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Functions"
      prevLessonLink="/lessons/02-string-concat-recap"
      nextLessonLink="/lessons/04-functions-args"
    />
    <SplitWithEditor leftWidth="50%" rightWidth="50%" initialCode={`
      // Do three steps: say name, say age, say favorite food
      console.log("Hi, my name is Josh.");
      console.log("I'm 35 years old.");
      console.log("I like tacos.");

      // Do the same three steps again
      console.log("Hi, my name is Josh.");
      console.log("I'm 35 years old.");
      console.log("I like tacos.");
    `}>
      <p>
        Define a function when you want to repeat the same steps multiple times.
        Use a function call when you want to run the steps.
      </p>
      <p>To write a function:</p>
      <ul className="list list-disc space-y-4 text-xl">
        <li>
          start with the keyword <span className="bg-red-700 p-1">
            <code className="text-white">function</code>
          </span>
        </li>
        <li>
          give your function a <span className="bg-orange-700 p-1">name</span>
        </li>
        <li>
          add function <span className="bg-purple-700 p-1">arguments</span> in parentheses
        </li>
        <li>
          add <span className="bg-blue-700 p-1">curly braces</span>
        </li>
        <li>
          Write the steps you
          want to run inside the curly braces. That area is called
          the <span className="bg-green-700 p-1">function body</span>.
        </li>
      </ul>
      <code className="text-xl">
        <ColorClick colorClass="bg-red-700">function</ColorClick>
        <ColorClick colorClass="bg-orange-700">sayFavoriteFood</ColorClick>
        <ColorClick colorClass="bg-purple-700">()</ColorClick>
        <ColorClick colorClass="bg-blue-700">&#123;</ColorClick><br/>
        <ColorClick colorClass="bg-green-700">
          &nbsp;&nbsp;console.log("I like tacos");
        </ColorClick><br/>
        <ColorClick colorClass="bg-blue-700">&#125;</ColorClick><br/>
      </code>
      <p></p>
      <p>
        To call a function, use the
        <span className="bg-orange-700 m-1 p-1">function name</span>
        followed by <span className="bg-purple-700 p-1">parentheses:</span>
      </p>
      <code>
        <ColorClick colorClass="bg-orange-700">sayFavoriteFood</ColorClick>
        <ColorClick colorClass="bg-purple-700">()</ColorClick>;
      </code>
    </SplitWithEditor>
  </>;
}
