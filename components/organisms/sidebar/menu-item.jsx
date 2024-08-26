import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import icDashboard from '@/public/icon/ic-dashboard.svg'

export default function MenuItem({ active, title, href, icon, logout }) {
  const combineClass = ['item relative flex items-center gap-3 my-5 font-normal']
  if (active) combineClass.push("font-semibold after:contents-[''] after:border-4 after:border-primary after:bg-primary after:h-6 after:rounded-full after:absolute after:right-0")
  
    return (
      <li className={combineClass.join(" ")}>
        <Image
          src={`/icon/${icon}.svg`}
          width={21}
          height={21}
        />
        <span>
          {logout ? (
            <button type="button" onClick={logout}>{title}</button>
          ) : (
            <Link href={href}>{title}</Link>
          )}
        </span>
      </li>
    );
  
};