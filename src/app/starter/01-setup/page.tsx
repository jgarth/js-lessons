import spotlightBlank from './spotlight-blank.png'
import spotlightFilled from './spotlight-filled.png'
import popupDesktop from './vscode-popup-desktop.png'
import popupTrust from './vscode-trust.png'
import newFolder1 from './vscode-new-folder.png'
import newFolder2 from './vscode-new-folder-2.png'
import newFile from './vscode-new-file.png'
import editorHelloWorld from './vscode-hello-world.png'
import commandPaletteExtensions from './command-palette-extensions.png'
import commandPaletteLive from './command-palette-live.png'
import extensionsPreview from './extensions-preview.png'
import pagePreview from './page-preview.png'

import Image from 'next/image'

export default function Page() {
  return <>
    <div className="max-w-2xl mx-auto">
      <h1>Welcome!</h1>
      <p>
        Before the course commences, we need to setup some applications
        on your computer to get you started. After that's done, we'll create
        your first website together!
      </p>
      <h2 className="mb-4">Download all the prerequisites</h2>
      <ol className="list list-decimal ml-8 space-y-4">
        <li>
          Throughout the course, we will switch to using Google Chrome as our browser.
          Go to <a href="https://www.google.com/chrome/">google.com/chrome</a> and click &quot;Download Chrome&quot;.
          Follow the instructions on the download page to install Chrome.
        </li>
        <li>
          <p>
            We also need an editor to type out the HTML and CSS that we create
            during the course. For that, we use Visual Studio Code (or &quot;VS Code&quot;
            in short). Go to <a href="https://code.visualstudio.com">code.visualstudio.com</a> and
            click &quot;Download for macOS&quot;. Be sure to click the bigger part of the
            button, not the down-facing arrow on the right side.
          </p>
          <p>
            Find the file &quot;VSCode-darwin-universal.zip&quot; in your Downloads
            folder, double click it to unzip it. You should now see a new file:
            &quot;Visual Studio Code.app&quot;. Drag this file to your Applications folder.
          </p>
        </li>
      </ol>
      <h2>First steps in VS code</h2>
      <p>
        To open VS code, press Command + Spacebar. Start typing &quot;Visual Studio Code&quot; and
        you should see the app come up.
      </p>
      <Image src={spotlightBlank} alt="Screenshot: blank spotlight bar" />
      <Image src={spotlightFilled} alt="Screenshot: filled spotlight bar" />
      <p>
        Select it with the arrow keys on your keyboard and press
        Enter to launch to app. You'll be greeted by a new window.
        Select &quot;Open...&quot; from the options on the left.
      </p>
      <h3>Installing the live preview extension</h3>
      <p>
        An easy way to do or find certain things in VS code is the command pallette.
        Open the command pallette by pressing Command + Shift + P. A small window will open
        on top of your editor waiting for your commands. Type &quot;extensions&quot; and select
        the &quot;Extensions: Install Extensions&quot; option as depicted in the screenshot.
      </p>
      <Image src={commandPaletteExtensions} alt="Screenshot: using the command palette to install extensions" />
      <p>
        In the extension search bar, type &quot;preview&quot;. Find the entry for
        <strong>Live Preview</strong> by <strong>Microsoft</strong> and click on its
        &quot;Install&quot; button.
      </p>
      <Image src={extensionsPreview} alt="Screenshot: installing the live preview extension" />
      <h3>Creating your first website</h3>
      <p>
        We're ready to start. Select the Explorer tab by clicking on the top icon
        from the leftmost row of icons. Click &quot;Open Folder&quot;.
      </p>
      <Image src={newFolder1} alt="Screenshot: create a new folder in VS code" className="mb-6"/>
      <p>
        Select your Desktop from the left menu, and click the &quot;New Folder&quot;
        button. Name the new folder &quot;Take2&quot;, then press &quot;Open&quot;.
      </p>
      <Image src={newFolder2} alt="Screenshot: create a new folder in VS code" />
      <p>
        macOS might ask you if VS Code is allowed to access the Desktop. Press &quot;Allow&quot;.
      </p>
      <Image src={popupDesktop} alt="Screenshot: macOS desktop permission dialogue" height={300} className="mx-auto"/>
      <p>
        VS Code might then ask you if you want to trust the folder you've just created.
        Press &quot;Yes, I trust the authors&quot; to continue.
      </p>
      <Image src={popupTrust} alt="Screenshot: VS code folder trust dialogue" />
      <p>
        Create a new file named &quot;index.html&quot; using the button
        on the left.
      </p>
      <Image src={newFile} alt="Screenshot: create a new file in VS code" />
      <p>
        VS Code has already opened the file for us. Click into the editor window and enter the
        following text:
      </p>
      <p><code className="p-2 border border-gray-300 bg-gray-200 rounded-md">Hello, world!</code></p>
      <p>Your file should now look like this:</p>
      <Image src={editorHelloWorld} alt="Screenshot: typing hello world" />
      <h3>Seeing your work</h3>
      <p>
        Your first website, is ready to be viewed. Open the command palette
        again (Command + Shift + P) and type &quot;live&quot;. Select the entry for &quot;
        Live Preview: Show Preview (External Browser)&quot; with your arrow keys and press Enter.
      </p>
      <Image src={commandPaletteLive} alt="Screenshot: launching the live preview" className="mb-6" />
      <p>
        The result should be your website, in a browser:
      </p>
      <Image src={pagePreview} alt="Screenshot: page preview" className="mb-6" />
      <p>
        Congratulations. While this isn't the most impressive website <em>yet</em>, we're only
        getting started today.
      </p>
      <h2>Helping others</h2>
      <p>
        At this point in the class, look around to your classmates. Did everyone get here?
        Is anyone stuck? See if you can help out.
      </p>
    </div>
  </>
}
