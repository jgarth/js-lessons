'use client'

import Image from "next/image";
import Editor from '@/app/ui/editor';

export default function Home() {
  return (
    <div className="min-h-screen">
      <h1 className="text-white font-semibold text-6xl p-8">String concatenation</h1>
      <div className="flex flex-col lg:flex-row space-between px-8">
        <div className="flex flex-col space-between p-8 gap-8 lg:w-[40%] group/all">
          <h2 className="text-4xl">Recap</h2>
          <ul className="list list-disc space-y-4 text-xl group/top">
            <li>Use a string when you want to write out something: letters, words, spaces, numbers, symbols like <code>! @ # $ % ^ & * ( ) - =</code></li>
            <li>Strings are set between single quotes, double quotes, or backticks</li>
            <code>
              const string1 = "a";<br/>
              const string2 = 'b';<br/>
              const string3 = `c`;
            </code>
          </ul>
          <ul className="list list-disc space-y-4 text-xl group/top">
            <li>Strings can be concatenated (meaning: put together) using <code>+</code></li>
            <li>Strings can be concatenated with a variable</li>
            <li>If the variable is not yet a string, it will be converted to one</li>
          </ul>
        </div>
        <Editor className="w-[60%]">
          {`
            const food = "Tacos";
            const howMany = 12;

            console.log("I would like " + howMany + food);
          `}
        </Editor>
      </div>
    </div>
  );
}
