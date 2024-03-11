'use client'

import Image from "next/image";
import Editor from '@/app/ui/editor';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row space-between p-8 min-h-screen">
      <div className="flex flex-col space-between p-8 gap-8 lg:w-1/2 group/all">
        <h1 className="text-white font-semibold text-6xl">Variables</h1>
        <h2 className="text-4xl">Recap</h2>
        <ul className="list list-disc space-y-4 text-xl">
          <li>Use a variable when you want the program to remember&nbsp;something</li>
          <li>All variables must be declared with a <span className="group-hover/all:bg-green-500/50">keyword</span>: <code>let</code> or <code>const</code></li>
          <li>All variables have a <span className="group-hover/all:bg-purple-500/50">name</span></li>
          <li>All variables can be <span className="group-hover/all:bg-blue-500/50">assigned</span> a <span className="group-hover/all:bg-red-500/50">value</span></li>
        </ul>
        <code className="text-xl">
          <span className="group-hover/all:bg-green-500/50 p-2 mr-1">let</span>
          <span className="group-hover/all:bg-purple-500/50 p-2 mr-1">food</span>
          <span className="group-hover/all:bg-blue-500/50 p-2 mr-1">=</span>
          <span className="group-hover/all:bg-red-500/50 p-2 mr-1">"Tacos"</span>
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
          <span className="group-hover/all:bg-green-500/50 p-2 mr-1">const</span>
          <span className="group-hover/all:bg-purple-500/50 p-2 mr-1">drink</span>
          <span className="group-hover/all:bg-blue-500/50 p-2 mr-1">=</span>
          <span className="group-hover/all:bg-red-500/50 p-2 mr-1">"Water"</span>
          ;
        </code>
      </div>
      <Editor className="w-1/2">
        {`
          let variable1 = "some words";
          let variable2 = 12;

          console.log(variable1);
          console.log(variable2);
        `}
      </Editor>
    </div>
  );
}
