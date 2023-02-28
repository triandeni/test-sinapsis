import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <header className="flex h-24 w-full items-center justify-between bg-slate-500 px-9">
      <div className="text-3xl text-white font-bold">Blog</div>
      <nav>
        <ul className="flex items-baseline mr-32">
          <li className="ml-16 text-2xl text-white  cursor-pointer">
            <Link href="/">Blog</Link>
          </li>
          <li className="ml-16 text-2xl text-white cursor-pointer">
            <Link href="/user">User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
