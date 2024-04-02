import Link from "next/link";

const links = [
  {
    name: 'Start here',
    href: '/starter/01-setup',
  },
  {
    name: 'HTML and CSS',
    href: '/starter/02-html-and-css-intro',
  },
];

export default function Home() {
  return (
    <ol className="text-xl p-24 space-y-16 gap-y-8 list list-decimal">
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href}>
            <li className="my-4 hover:underline">{link.name}</li>
          </Link>
        );
      })}
    </ol>
  );
}
