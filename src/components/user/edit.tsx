'use client';
import '../../styles/globals.css';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

type UserEditScreenState = {
  loading: boolean;
  error: string;
  loadingUpdate: boolean;
};

type UserEditScreenAction =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS' }
  | { type: 'FETCH_FAIL'; payload: string }
  | { type: 'UPDATE_REQUEST' }
  | { type: 'UPDATE_SUCCESS' }
  | { type: 'UPDATE_FAIL' };

const reducer = (
  state: UserEditScreenState,
  action: UserEditScreenAction
): UserEditScreenState => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false };
    default:
      return state;
  }
};

const UserEditScreen: React.FC = ({ query }: any) => {
  const [{ loading, error, loadingUpdate }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    loadingUpdate: false,
  });

  const { state } = useContext(Store);
  const { userInfo } = state;

  const { id: userId } = query;

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(
          `https://descriptive-bubble-production.up.railway.app/api/users/${userId}`,
          {
            headers: { Authorization: `${userInfo!.token}` },
          }
        );
        setName(data.name);
        setEmail(data.email);
        setIsAdmin(data.isAdmin);
        dispatch({ type: 'FETCH_SUCCESS' });
      } catch (err: any) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    fetchData();
  }, [userId, userInfo]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(
        `https://descriptive-bubble-production.up.railway.app/api/users/${userId}`,
        { _id: userId, name, email, isAdmin },
        {
          headers: { Authorization: `${userInfo!.token}` },
        }
      );
      dispatch({
        type: 'UPDATE_SUCCESS',
      });
      toast.success('User updated successfully');
      window.location.href = '/admin/users';
    } catch (err: any) {
      toast.error(getError(err));
      dispatch({ type: 'UPDATE_FAIL' });
    }
  };

  return (
    <div className="bg-[#050816] h-screen border p-0.5 overflow-hidden max-sm:p-4">
      <div className="container mx-auto max-w-md border-2 shadow-2xl p-4 rounded-lg mt-24">
        <h1 className="text-2xl font-bold mb-4">Edit User {userId}</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-600">{'error'}</p>
        ) : (
          <form onSubmit={submitHandler} className="space-y-3">
            <div className="flex flex-col" id="name">
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
            <div className="flex flex-col" id="email">
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                title="email"
                className="border border-gray-300 p-2 rounded"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2" id="_isAdmin">
              <input
                className="rounded"
                type="checkbox"
                id="isAdmin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              />
              <label htmlFor="isAdmin">isAdmin</label>
            </div>

            <div className="flex justify-center">
              <button
                className={`bg-blue-500 text-white py-2 px-4 rounded ${
                  loadingUpdate && 'opacity-50 cursor-not-allowed'
                }`}
                type="submit"
                disabled={loadingUpdate}
              >
                Update
              </button>
            </div>
            {loadingUpdate && <p>Updating...</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default UserEditScreen;
