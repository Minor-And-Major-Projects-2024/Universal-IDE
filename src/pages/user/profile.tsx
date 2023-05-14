'use client';
import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import React, { useContext, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

interface State {
  loadingUpdate: boolean;
}

type Action =
  | { type: 'UPDATE_REQUEST' }
  | { type: 'UPDATE_SUCCESS' }
  | { type: 'UPDATE_FAIL' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

const ProfileScreen = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo }: any = state;

  const [name, setName] = useState<string>(userInfo?.name ?? '');
  const [email, setEmail] = useState<string>(userInfo?.email ?? '');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [{ loadingUpdate }, dispatch] = useReducer(reducer, {
    loadingUpdate: false,
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      alert('Passwords do not match')
      return;
    }
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      console.log(loadingUpdate);
      const { data } = await axios.put(
        'https://descriptive-bubble-production.up.railway.app/user/profile',
        {
          name,
          email,
          password,
        },
        {
          headers: { authorization: `${userInfo!.token}` },
        }
      );

      dispatch({
        type: 'UPDATE_SUCCESS',
      });

      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      toast.success('User updated successfully');
      alert('User updated successfully 😁')
    } catch (err: any) {
      dispatch({
        type: 'UPDATE_FAIL',
      });
      toast.error(getError(err));
      alert('User updation failed 😥 \n' + getError(err))
    }
  };

  return (
    <div className="bg-[#050816] h-screen border p-6 lg:pb-12">
      <div className="bg-[#1d1836] mx-auto max-w-md border shadow-2xl p-8 rounded-lg hover:shadow-xl hover:shadow-[#915EFF] mt-20">
        <div className="w-full shadow-xl flex justify-between px-2 mb-2 py-1">
          <Link href={'/'} className="text-white font-bold shadow-xl text-3xl ">
            {' '}
            IDE
          </Link>
          <span className="text-3xl font-bold text-center">User Profile</span>
        </div>
        <form onSubmit={submitHandler} className="space-y-4 text-white/80">
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="name">
              Name
            </label>
            <input
              title="name"
              className="border border-gray-300 p-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <input
              title="email"
              className="border border-gray-300 p-2 rounded"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <input
              title="password"
              className="border border-gray-300 p-2 rounded"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              title="confirmPassword"
              className="border border-gray-300 p-2 rounded"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-full bg-[#050816] hover:shadow-2xl hover:shadow-[#915EFF] text-white font-bold py-2 px-4 my-2 rounded"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileScreen;
