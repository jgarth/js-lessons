'use client';

import { useState } from 'react';

interface ColorClickProps {
  colorClass: string,
  children: React.ReactNode,
  clicked ?: boolean
}

export default function ColorClick({ colorClass, children, clicked }: ColorClickProps) {
  const [wasClicked, setClicked] = useState(clicked !== undefined);

  const onClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    setClicked(!wasClicked);
  }

  return <>
    <span
      onClick={onClick}
      className={`${wasClicked ? colorClass : ""} border border-white/10 p-1 px-2 m-1 inline-block select-none rounded-md`}>
      {children}
    </span>
  </>;
}
