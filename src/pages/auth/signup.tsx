import '../../styles/globals.css';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

const SignupScreen = () => {
  const router = useRouter();
  const { query } = router;
  const redirectInUrl = query.redirect ? query.redirect.toString() : '/';
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const { data } = await Axios.post(
        'https://descriptive-bubble-production.up.railway.app/auth/signup',
        {
          name,
          email,
          password,
        }
      );
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      router.push(redirect || '/');
    } catch (err: any) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      router.push(redirect);
    }
  }, [router, redirect, userInfo]);

  return (
    <div className="bg-[#050816] border shadow-inner shadow-gray-700 h-screen p-6 md:p-28">
      <div className="p-16 md:p-12 bg-[#1d1836] max-w-md mx-auto border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]">
        <form onSubmit={submitHandler}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-bold text-white-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              className="w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-white-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 font-bold text-white-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-10">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 font-bold text-white-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm password"
              className="w-full px-3 py-2 border rounded"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#050816] hover:shadow-2xl hover:shadow-[#915EFF] text-white font-bold py-2 px-4 my-2 rounded"
          >
            Sign Up
          </button>
          <div className="my-3 text-white/50">
            Already have an account?{' '}
            <Link href={`/auth/signin?redirect=${redirect}`}>
              <span className="text-white font-semibold">Sign-In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupScreen;
