'use client'

import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: 'Variables - Recap',
    href: '/lessons/01-variables-recap',
  },
  {
    name: 'String Concatenation - Recap',
    href: '/lessons/02-string-concat-recap',
  },
  {
    name: 'Functions - basics',
    href: '/lessons/03-functions-basic',
  },
  {
    name: 'Functions - taking arguments',
    href: '/lessons/04-functions-args',
  },
  {
    name: 'Functions - returning a value',
    href: '/lessons/05-functions-return',
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
