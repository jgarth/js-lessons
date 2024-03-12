'use client';

import { useState } from 'react';

export default function ColorClick({ colorClass, children, clicked }) {
  const [wasClicked, setClicked] = useState(clicked !== undefined);

  const onClick = (event) => {
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
