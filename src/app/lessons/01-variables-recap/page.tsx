import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
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
        <li>All variables must be declared with a <ColorClick colorClass="bg-green-500/50" clicked>keyword</ColorClick>: <code>let</code>&nbsp;or&nbsp;<code>const</code></li>
        <li>All variables have a <ColorClick colorClass="bg-purple-500/50" clicked>name</ColorClick></li>
        <li>All variables can be <ColorClick colorClass="bg-blue-500/50" clicked>assigned</ColorClick> a <ColorClick colorClass="bg-red-500/50" clicked>value</ColorClick></li>
      </ul>
      <code className="text-xl">
        <ColorClick colorClass="bg-green-500/50 p-2 mr-1">let</ColorClick>
        <ColorClick colorClass="bg-purple-500/50 p-2 mr-1">food</ColorClick>
        <ColorClick colorClass="bg-blue-500/50 p-2 mr-1">=</ColorClick>
        <ColorClick colorClass="bg-red-500/50 p-2 mr-1">&quot;Tacos&quot;</ColorClick>
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
        <ColorClick colorClass="bg-green-500/50 p-2 mr-1">const</ColorClick>
        <ColorClick colorClass="bg-purple-500/50 p-2 mr-1">drink</ColorClick>
        <ColorClick colorClass="bg-blue-500/50 p-2 mr-1">=</ColorClick>
        <ColorClick colorClass="bg-red-500/50 p-2 mr-1">&quot;Water&quot;</ColorClick>
        ;
      </code>
    </SplitWithEditor>
  </>;
}
