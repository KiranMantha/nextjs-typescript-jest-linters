// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

const basicApi = (req: NextApiRequest, res: NextApiResponse<{ name: string }>) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  res.status(200).json({ name: 'Hello, world!' });
};

export default basicApi;
