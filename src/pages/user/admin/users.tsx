'use client';
import '../../../styles/globals.css';
import React, { useContext, useReducer, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

type User = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

type State = {
  loading: boolean;
  error: string;
  users: User[];
  loadingDelete: boolean;
  successDelete: boolean;
};

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: User[] }
  | { type: 'FETCH_FAIL'; payload: string }
  | { type: 'DELETE_REQUEST' }
  | { type: 'DELETE_SUCCESS' }
  | { type: 'DELETE_FAIL' }
  | { type: 'DELETE_RESET' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true, successDelete: false };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        loadingDelete: false,
        successDelete: true,
      };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      return state;
  }
};

export default function UserListScreen(): JSX.Element {
  const [{ loading, error, users, loadingDelete, successDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
      users: [],
      loadingDelete: false,
      successDelete: false,
    });

  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get<User[]>(
          `https://descriptive-bubble-production.up.railway.app/api/users`,
          {
            headers: { Authorization: `${userInfo!.token}` },
          }
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err: any) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(err),
        });
      }
    };
    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [userInfo, successDelete]);

  const deleteHandler = async (user: User) => {
    if (window.confirm(`Your are Deleteing "${user.name}"`)) {
      try {
        dispatch({ type: 'DELETE_REQUEST' });
        await axios.delete(
          `https://descriptive-bubble-production.up.railway.app/api/users/${user._id}`,
          {
            headers: { Authorization: `${userInfo!.token}` },
          }
        );
        toast.success('user deleted successfully');
        dispatch({ type: 'DELETE_SUCCESS' });
      } catch (err: any) {
        toast.error(getError(err));
        dispatch({
          type: 'DELETE_FAIL',
        });
      }
    }
  };

  return (
    <div className="bg-[#050816] h-screen border p-0.5 overflow-hidden">
      <div className="w-full shadow-xl flex justify-between px-2 mb-2 py-1">
        <Link href={'/'} className="text-white font-bold shadow-xl text-3xl ">
          {' '}
          IDE
        </Link>
        <span className="text-3xl font-bold text-center pr-8">Users</span>
      </div>
      <div className="p-4 lg:h-[670px] md:h-[620px] sm:h-[600px] max-sm:h-[600px] w-full overflow-auto border">
        {loadingDelete && <p className="text-center">Deleting...</p>}
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-600 text-center">{error}</p>
        ) : (
          <table className="table-auto w-full text-center rounded-lg p-2 shadow-xl shadow-[#915EFF]">
            <thead className="rounded-t-lg ">
              <tr className="bg-[#1d1836] text-white/80  rounded-t-lg ">
                <th className="p-2 text-center rounded-tl-lg shadow-lg">ID</th>
                <th className="p-2 text-center shadow-lg">NAME</th>
                <th className="p-2 text-center shadow-lg">EMAIL</th>
                <th className="p-2 text-center shadow-lg">IS ADMIN</th>
                <th className="p-2 text-center rounded-tr-lg shadow-lg">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody className="rounded-lg overflow-hidden">
              {users.map((user: User) => (
                <tr key={user._id} className="">
                  <td className="p-2 rounded-bl-lg bg-[#1d1836]">{user._id}</td>
                  <td className="p-2 bg-[#1d1836]">{user.name}</td>
                  <td className="p-2 bg-[#1d1836]">{user.email}</td>
                  <td className="p-2 bg-[#1d1836]">
                    {user.isAdmin ? 'YES' : 'NO'}
                  </td>
                  <td className="p-2 rounded-br-lg bg-[#1d1836]">
                    <button
                      type="submit"
                      className="bg-[#050816] hover:shadow-xl hover:shadow-[#915EFF] px-2 py-1 rounded m-1"
                      onClick={() =>
                        (window.location.href = `/user/${user._id}`)
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#050816] hover:shadow-xl hover:shadow-[#915EFF] px-2 py-1 rounded m-1"
                      onClick={() => deleteHandler(user)}
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
    </div>
  );
}
