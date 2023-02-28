import React from 'react';
import Navbar from './Navbar';

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main className="my-12  w-full">{props.children}</main>
    </div>
  );
}
