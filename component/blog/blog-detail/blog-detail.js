import axios from 'axios';
import React, { useEffect } from 'react';

export default function BlogDetail(props) {
  return (
    <div className="container w-2/3 h-full justify-items-center mx-auto">
      <div className="border-2 shadow-xl rounded-sm p-16">
        <div className="text-center flex justify-start items-center mb-2">
          <h1 className="text-lg font-bold">{props.title}</h1>
        </div>
        <p className="text-md">{props.body}</p>
      </div>
      <div></div>
    </div>
  );
}
