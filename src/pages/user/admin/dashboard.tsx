import '../../../styles/globals.css';
import React, { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

import {
  Chart as ChartJS,
  ChartOptions,
  BarElement,
  LinearScale,
} from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Store } from '@/store';
import { getError } from '@/utils';
import Link from 'next/link';

ChartJS.register(BarElement, LinearScale);
ChartJS.register(CategoryScale);

const DashboardScreen: React.FC = () => {
  const [usersData, setUsersData] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          'https://descriptive-bubble-production.up.railway.app/api/users',
          {
            headers: { Authorization: `${userInfo!.token}` },
          }
        );
        const sortedData = sortUserDataByMonth(data);
        const monthlyCounts = countUsersPerMonth(sortedData);
        setUsersData(monthlyCounts);
        setLoading(false);
      } catch (err: any) {
        setLoading(false);
        setError(getError(err));
      }
    };
    getData();
  }, [userInfo]);

  const sortUserDataByMonth = (userData: any[]) => {
    return userData.sort((a, b) => {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });
  };

  const countUsersPerMonth = (userData: any[]) => {
    const counts = new Array(12).fill(0);
    userData.forEach((user) => {
      const month = new Date(user.createdAt).getMonth();
      counts[month]++;
    });
    return counts;
  };

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    datasets: [
      {
        label: 'Number of Users',
        data: usersData,
        backgroundColor: 'rgba(145, 235, 54, 0.2)',
        borderColor: '#29501d',
        textColor: '#29501d',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: 'category',
      },
    },
  };

  const sum = usersData.reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="h-full p-4 md:p-8 bg-[#050816] \h-screen border overflow-hidden">
      <div className="container mx-auto px-2 md:px-4 py-4 md:py-6">
      <div className="w-full shadow-xl flex justify-start space-x-4 px-2 mb-2 py-1">
        <Link href={'/'} className="text-white font-bold shadow-xl text-3xl ">
          {' '}
          IDE
        </Link>
        <span className="text-3xl font-bold text-center pr-8">DashBoard</span>
      </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 md:mb-6">
          <h2 className="text-lg max-sm:text-base font-bold mb-2">
            Total Users: {sum}
          </h2>
          <div className="flex items-center">
            <FaUser className="mr-2" />
            <p className="text-lg max-sm:text-base font-bold m-0.5">
              {userInfo ? <>{userInfo.name}</> : 'john doe'}
            </p>
          </div>
        </div>
        {loading ? (
          <div className="h-screen p-8 bg-gray-50 flex items-center justify-center">
            Loading...
          </div>
        ) : error ? (
          <div className="h-screen p-8 bg-gray-50 flex items-center justify-center text-red-600">
            {error}
          </div>
        ) : (
          <div className="h-full">
            <div className="border-2 border-gray-800 rounded-lg p-4 text-red-500 h-full">
              <Bar data={data} options={options} width={400} height={400} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardScreen;
