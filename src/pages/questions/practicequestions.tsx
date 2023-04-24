import { useState } from 'react';
import axios from 'axios';
import '../../styles/globals.css';
import Link from 'next/link';

interface Question {
  stat: {
    question_id: number;
    question__title: string;
    question__title_slug: string;
  };
  difficulty: {
    level: number;
  };
}

interface Props {
  questions: Question[];
}

const Practicequest = ({ questions }: Props) => {
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(
    (question) =>
      question.stat.question_id.toString().includes(searchTerm) ||
      question.stat.question__title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="bg-[#050816] text-white flex justify-center items-center text-center">
        Failed to Fetch question 😥
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="bg-[#050816] text-white flex justify-center items-center text-center">
        Loading... ⚙️
      </div>
    );
  }

  return (
    <div className="bg-[#050816] lg:h-screen sm:h-full lg:overflow-hidden border p-4 lg:pb-12">
      <div className="flex justify-between items-center mb-2 px-4 max-sm:px-2">
        <span className="text-white text-center flex flex-row max-sm:flex-col max-sm:px-1 ">
          <Link href={'/'} className="px-4 max-sm:px-1 max-sm:text-[16px] lg:text-xl">
            IDE
          </Link>
          <span className='max-sm:text-[12px] lg:text-lg text-white/60'>Practice quest</span>
        </span>
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-64 max-sm:w-52 focus:outline-none bg-[#1d1836] focus:ring-2 focus:ring-[#915EFF] focus:border-transparent"
          placeholder="Search by ID or name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 h-full overflow-y-auto p-2 border">
        {questions.map((question) => (
          <div
            key={question.stat.question_id}
            className="bg-[#1d1836] p-2 h-24 shadow-md text-white/80 justify-around flex flex-col border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
          >
            <div className="shadow-lg flex flex-row justify-between px-4 py-1">
              <h2 className="text-lg font-medium space-x-2">
                <span className="text-white">{question.stat.question_id}.</span>
                <span>{question.stat.question__title}</span>
              </h2>
              <p className="text-white">{question.difficulty.level}</p>
            </div>
            <a
              href={`https://leetcode.com/problems/${question.stat.question__title_slug}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:underline px-4 mt-1"
            >
              View on LeetCode
            </a>
          </div>
        ))}
      </div> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-3 h-full overflow-y-auto p-2 justify-evenly">
        {filteredQuestions.map((question) => (
          <div
            key={question.stat.question_id}
            className="bg-[#1d1836] p-2 h-24 shadow-md text-white/80 justify-around flex flex-col border rounded-lg hover:shadow-xl hover:shadow-[#915EFF]"
          >
            <div className="shadow-lg flex flex-row justify-between px-4 py-1">
              <h2 className="text-lg font-medium space-x-2">
                <span className="text-white">{question.stat.question_id}.</span>
                <span>{question.stat.question__title}</span>
              </h2>
              <p className="text-white">{question.difficulty.level}</p>
            </div>
            <a
              href={`https://leetcode.com/problems/${question.stat.question__title_slug}`}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:underline px-4 mt-1"
            >
              View on LeetCode
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Practicequest;

export async function getStaticProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/leetcode');
    const questions = response.data.slice(0, 40);
    return { props: { questions } };
  } catch (error) {
    console.log(error);
    return { props: { questions: [] } };
  }
}
