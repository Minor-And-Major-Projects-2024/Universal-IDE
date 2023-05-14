import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://leetcode.com/api/problems/all/');
    const questions = response.data.stat_status_pairs;
    res.status(200).json(questions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching questions' });
  }
};
