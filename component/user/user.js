import { deleteUser, getUser } from '@/state/actions/userActions';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layout/Loader';

export default function Users() {
  const userData = useSelector((state) => state?.users.userData);
  const dispatch = useDispatch();

  const user = async () => {
    await axios.get('https://gorest.co.in/public/v2/users').then((res) => {
      dispatch(getUser(res.data));
    });
  };

  useEffect(() => {
    user();
  }, []);

  const deleteHanlder = async (id) => {
    await axios
      .delete(`api/users/${id}`)
      .then((res) => {
        dispatch(deleteUser(console.log(res)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container w-3/5 mx-auto flex justify-center items-center flex-col">
      <div className="flex w-full justify-between">
        <input
          className="w-30 h-10 border-2 border-black p-2 rounded-xl "
          placeholder="search..."
        />
        <button className="font-bold bg-green-500 rounded-lg p-2 mb-10 text-white hover:bg-green-600">
          <Link href="create-user"> Add User </Link>
        </button>
      </div>

      {!userData && userData == undefined ? (
        <Loader />
      ) : (
        <table className=" table-auto w-1">
          <thead>
            <tr className="bg-slate-800 w-1">
              <th className="px-16 py-2 text-white">Name</th>
              <th className="px-16 py-2 text-white">Email</th>
              <th className="px-16 py-2 text-white">Gender</th>
              <th className="px-16 py-2 text-white">Status</th>
              <th className="px-16 py-2 text-white">Action</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {userData.map((users) => (
              <tr className="border-b-2 border-gray-900" key={users.id}>
                <td className="px-5 py-2  items-center">{users.name}</td>
                <td className="px-16 py-2   items-center">{users.email}</td>
                <td className="px-16 py-2  items-center">{users.gender}</td>

                <td className="px-16 py-2  items-center">{users.status}</td>
                <td className=" bg-white mx-auto flex  p-3 items-center justify-center">
                  <button className='className="mr-3 w-16 border-2 h-10 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"'>
                    <Link href={`updateUser/${users.id}`}>Edit</Link>
                  </button>
                  <button
                    onClick={deleteHanlder}
                    className="w-16 border-2 h-10 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
