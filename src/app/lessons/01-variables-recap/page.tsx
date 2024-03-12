import Headline from '@/app/ui/headline';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Variables"
      subtitle="Recap"
      nextLessonLink="/lessons/02-string-concat-recap"
    />
    <SplitWithEditor initialCode={`
      let variable1 = "some words";
      let variable2 = 12;

      console.log(variable1);
      console.log(variable2);
    `}>
      <ul className="list list-disc space-y-4 text-xl">
        <li>Use a variable when you want the program to remember&nbsp;something</li>
        <li>All variables must be declared with a <span className="bg-green-500/50">keyword</span>: <code>let</code> or <code>const</code></li>
        <li>All variables have a <span className="bg-purple-500/50">name</span></li>
        <li>All variables can be <span className="bg-blue-500/50">assigned</span> a <span className="bg-red-500/50">value</span></li>
      </ul>
      <code className="text-xl">
        <span className="bg-green-500/50 p-2 mr-1">let</span>
        <span className="bg-purple-500/50 p-2 mr-1">food</span>
        <span className="bg-blue-500/50 p-2 mr-1">=</span>
        <span className="bg-red-500/50 p-2 mr-1">"Tacos"</span>
        ;
      </code>
      <ul className="list list-disc space-y-4 text-xl">
        <li><code>let</code> declares a variable whose value can be changed</li>
        <li>
          <code>const</code> declares a variable whose value
          remains constant and cannot be changed
        </li>
      </ul>
      <code className="text-xl">
        <span className="bg-green-500/50 p-2 mr-1">const</span>
        <span className="bg-purple-500/50 p-2 mr-1">drink</span>
        <span className="bg-blue-500/50 p-2 mr-1">=</span>
        <span className="bg-red-500/50 p-2 mr-1">"Water"</span>
        ;
      </code>
    </SplitWithEditor>
  </>;
}
