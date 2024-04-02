import html1Css1 from "./html-1-css-1.png";
import html1Css2 from "./html-1-css-2.png";
import html2Css1 from "./html-2-css-1.png";
import vsCodeWithHeadline from "./vs-code-with-headline.png";
import browserWithHeadline from "./browser-with-headline.png";
import vsCodeWithHeadlineTagged from "./vs-code-with-headline-tagged.png";
import browserWithHeadlineTagged from "./browser-with-headline-tagged.png";

import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <h1>What is a website?</h1>
        <p>
          After realizing your first website, let's go back a bit and talk about
          what a website is. For our purposes, a website consists of three
          parts: HTML, CSS, and Javascript.
        </p>
        <h3>HTML</h3>
        <p>
          HTML describes the content of the website. It does not tell us how the
          content should look, only what should be there.
        </p>
        <h3>CSS</h3>
        <p>
          CSS describes how the website content should look, but not what the
          content is.
        </p>
        <h3>Javascript</h3>
        <p>
          Javascript (or &quot;JS&quot; in short) tells us about the website's
          interactive behavior, if any. In this starter course, we don't have to
          worry about Javascript yet.
        </p>
        <div className="space-y-8">
          <h2>Examples</h2>
          <h3>Same HTML, different CSS.</h3>
          <p>
            Note how the content does not change, the same words are on both
            websites, but the style is different.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image src={html1Css1} alt="Screenshot: HTML 1, CSS 1" />
            <Image src={html1Css2} alt="Screenshot: HTML 1, CSS 2" />
          </div>
          <h3>Same CSS, different HTML</h3>
          <p>
            Note how the content changes and the words are different, but the
            style is identical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Image src={html1Css1} alt="Screenshot: HTML 1, CSS 1" />
            <Image src={html2Css1} alt="Screenshot: HTML 2, CSS 1" />
          </div>
        </div>
        <h1 className="mt-12">HTML</h1>
        <p>
          First, we'll talk about the part that tells a browser what the
          website's contents are: HTML. In this lesson, we'll learn how to add
          different parts to a website, like headlines, paragraphs, and lists.
        </p>
        <p>
          In our example website from the previous lesson, we only wrote a line
          of text. What if we want to add a headline to our website?
        </p>
        <p>
          Let's add a headline to our website. In VS code, type the words{" "}
          <code>My first website</code> on a line before the words{" "}
          <code>Hello, world!</code>. This should be the result:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={vsCodeWithHeadline}
            alt="Screenshot: adding a headline in VS code"
          />
          <Image
            src={browserWithHeadline}
            alt="Screenshot: previewing with headline"
          />
        </div>
        <p>
          The browser doesn't know we wanted this to be a headline, so it just
          displays it like any other text. We can tell the browser that we
          wanted it to be a headline by using an <strong>HTML element</strong>.
          HTML elements start with an <em>opening tag</em> and end with a{" "}
          <em>closing tag</em>. In between, there's the content.
        </p>
        <div className="grid grid-cols-3 my-6 border border-gray-300 rounded-lg p-6">
          <div className="flex flex-col items-center gap-y-2 text-red-500">
            <div className="text-2xl">
              <code>&lt;h1&gt;</code>
            </div>
            <div>opening tag</div>
          </div>
          <div className="flex flex-col items-center gap-y-2 text-blue-500">
            <div className="text-2xl">
              <code>My headline</code>
            </div>
            <div>content</div>
          </div>
          <div className="flex flex-col items-center gap-y-2 text-red-500">
            <div className="text-2xl">
              <code>&lt;&#47;h1&gt;</code>
            </div>
            <div className="">closing tag</div>
          </div>
        </div>
        <p>
          Let's modify our website to use these tags and see the result. Edit
          the first line
        </p>
        <code className="my-6 block">My first website</code>
        <p>and surround it with an opening tag and a closing tag</p>
        <code className="my-6 block">
          &lt;h1&gt;My first website&lt;/h1&gt;
        </code>
        <p>Check out the result in your live preview:</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src={vsCodeWithHeadlineTagged}
            alt="Screenshot: adding HTML tags to our headline in VS code"
          />
          <Image
            src={browserWithHeadlineTagged}
            alt="Screenshot: previewing the headline with HTML tags"
          />
        </div>
        <p>
          Done! The browser knows that &quot;My first website&quot; should be a
          headline, because we used the HTML tag for headlines
          <code>&lt;h1&gt;</code>. We can use other tags to create other
          elements. For example, the tag <code>&lt;u&gt;</code> is used to
          create an underlined element. Try it! Surround any word with the{" "}
          <code>&lt;u&gt;</code> and <code>&lt;/u&gt;</code> tags to make it
          underlined.
        </p>
        <div className="border border-green-600 bg-green-300/50 rounded-lg p-6">
          <h3>Group Exercise</h3>
          <div>
            Set a timer for five minutes. Google to find out which other HTML
            tags can be used for headlines. Tell someone in the group what you
            found out.
          </div>
        </div>
      </div>
    </>
  );
}
