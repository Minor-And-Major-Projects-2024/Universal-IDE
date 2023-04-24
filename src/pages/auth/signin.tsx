import '../../styles/globals.css';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Axios from 'axios';
import { toast } from 'react-toastify';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

const SigninScreen = () => {
  const router = useRouter();
  const redirectInUrl = router.query.redirect as string;
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userInfo, setUserInfo] = useState(null);

  const { dispatch: ctxDispatch } = useContext(Store);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data }: any = await Axios.post<{
        email: string;
        password: string;
      }>('https://descriptive-bubble-production.up.railway.app/auth/signin', {
        email,
        password,
      });
      setUserInfo(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      router.push(redirect || '/');
    } catch (err: any) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo && typeof window !== 'undefined') {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  return (
    <div className="bg-[#050816] border shadow-inner shadow-gray-700 h-screen p-6 md:p-32">
      <div className="bg-[#1d1836] max-w-md mx-auto border rounded-lg hover:shadow-xl hover:shadow-[#915EFF] p-20">
        <form onSubmit={submitHandler}>
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
              className="w-full px-3 py-2 border rounded mt-2 mb-5"
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
              className="w-full px-3 py-2 border rounded mt-2 mb-9"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#050816] hover:shadow-2xl hover:shadow-[#915EFF] text-white font-bold py-2 px-4 my-2 rounded"
          >
            Sign In
          </button>
          <div className="my-3 text-white/50">
            New customer?{' '}
            <Link href={`/auth/signup?redirect=${redirect}`}>
              <span className="text-white font-semibold">
                Create your account
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninScreen;
