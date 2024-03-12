import Headline from '@/app/ui/headline';
import ColorClick from '@/app/ui/color_click';
import SplitWithEditor from '@/app/ui/split_with_editor';

export default function Page() {
  return <>
    <Headline
      title="Functions"
      subtitle="Challenge"
      prevLessonLink="/lessons/06-functions-arrow-notation"
    />
    <div className="grid grid-cols-3 p-12 gap-12">
      <div className="flex flex-col space-y-4 border-r border-gray-600">
        <p className="mb-8 text-3xl">
          Challenge 1
        </p>
        <p>Write four functions:</p>
        <ul className="list list-decimal list-inside">
          <li>one to add two numbers</li>
          <li>one to substract two numbers</li>
          <li>one to divide two numbers</li>
          <li>one to multiply two numbers</li>
        </ul>
        <p>Example calls and results when you're done:</p>
        <ul className="space-y-1">
          <li><code> add(5, 2) === 7 </code></li>
          <li><code> sub(5, 2) === 3 </code></li>
          <li><code> mul(5, 2) === 10 </code></li>
          <li><code> div(5, 2) === 2.5 </code></li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4 pr-8 border-r border-gray-600">
        <p className="mb-8 text-3xl">
          Challenge 2
        </p>
        <p>Create a website with:</p>
        <ul className="list list-decimal list-inside">
          <li>two text fields for numbers</li>
          <li>four buttons, one for each function from the previous challenge</li>
          <li>one text field for the result</li>
        </ul>
        <p>
          Use the two numbers from the text fields (1) as inputs,
          and run the function indicated by the button (2).
          Put the result in (3).
        </p>
        <p>Example:</p>
        <ul>
          <li>A user enters "2" in the first text field.</li>
          <li>The user enters "5" in the second text field.</li>
          <li>The user presses the "+" button.</li>
          <li>The result text field now contains the number "7"</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-4">
        <p className="mb-8 text-3xl">
          Challenge 3
        </p>
        <p>
          Imagine your website became really popular overnight, and your users
          have reported some bugs and requested some features.
        </p>
        <p>
          Try the following things on your website and make sure they either work as expected, or that the user gets
          a message to understand what they did wrong.
        </p>
        <p>
          <u>Hint:</u> an easy way to show a message is to use <code>alert()</code>.
        </p>
        <ul className="list list-decimal list-inside">
          <li>Divide a number by 0</li>
          <li>Enter a word in one of the text fields instead of a number</li>
          <li>Add exponents and use your multiplication function</li>
          <li>
            Output the result in words, like<br/>
            <code>forty five</code> instead of <code>45</code>.
          </li>
        </ul>
      </div>
    </div>
  </>;
}
