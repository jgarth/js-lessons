import Link from "next/link";

const links = [
  {
    name: 'Click here to start',
    href: '/starter/00-preamble'
  },
  {
    name: 'Setup & your first website',
    href: '/starter/01-setup',
  },
  {
    name: 'Learn about HTML',
    href: '/starter/02-html-intro',
  },
  {
    name: 'Practise HTML',
    href: '/starter/03-html-practice',
  }
];

export default function Home() {
  return <>
    <div className="min-h-screen -mt-24 items-center justify-center flex flex-col">
      <h1>The Starter Course</h1>
      <ol className="text-xl ml-[30px] list list-decimal">
        {links.map((link) => {
          return (
            <Link key={link.name} href={link.href} className="underline underline-offset-2">
              <li className="my-4 hover:underline">{link.name}</li>
            </Link>
          );
        })}
      </ol>
    </div>
  </>;
}
