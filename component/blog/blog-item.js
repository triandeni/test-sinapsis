import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

export default function BlogItem(props) {
  const router = useRouter();

  const ShowDetail = async () => {
    router.push('/' + props.id);
  };
  return (
    <div className=" border-2 w-full p-10 mb-6 shadow-lg ">
      <div className="text-center h-80 ">
        <h1 className="font-bold mb-5 text-lg">{props.title}</h1>
        <p className=" border-b-2 border-black " />
        <p className="text-md mt-5">{props.body}</p>
      </div>
      <div className="mt-10 flex items-end justify-end">
        <button
          onClick={ShowDetail}
          className="w-20 h-10 bg-slate-600 rounded-lg p-3 items-center flex font-bold text-white hover:bg-slate-700 hover:text-slate-200"
        >
          Details
        </button>
      </div>
    </div>
  );
}
