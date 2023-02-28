import { createUser } from '@/state/actions/userActions';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';

const CreateNewUser = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [status, setStatus] = useState();

  const dispatch = useDispatch();
  const data = {
    name: name,
    email: email,
    gender: gender,
    status: status,
  };

  const config = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post('api/users', data, config)
      .then((res) => {
        dispatch(createUser(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full md:w-1/2 mx-auto border-2 border-solid rounded-lg shadow-xl">
      <h1 className="text-3xl text-center font-bold p-2">Tambah Data</h1>
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-slate-300 w-80 lg:w-96 mr-5 px-5 py-3 focus:outline-none focus:border-slate-700 rounded-md h-9"
            placeholder="name"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-slate-300 w-80 lg:w-96 px-5 py-3 rounded-md h-9 focus:outline-none focus:border-slate-700 "
            placeholder="email"
          />
        </div>

        <div className="mt-4">
          <select
            onChange={(e) => setGender(e.target.value)}
            name="gender"
            className="ml-1 border-2 border-slate-200 rounded-md p-1"
          >
            <option>Gender</option>
            <option>male</option>
            <option>female</option>
          </select>
          <select
            onChange={(e) => setStatus(e.target.value)}
            name="status"
            className="ml-32 lg:ml-52 border-2 border-slate-200 rounded-md p-1"
          >
            <option>Status</option>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div>
        <div className="flex justify-end mt-6">
          <button className="bg-green-600 px-5 py-2 rounded-lg text-md text-white hover:bg-green-700">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewUser;
