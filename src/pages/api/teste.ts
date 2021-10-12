import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://iu2n4g30w4.execute-api.us-east-1.amazonaws.com/dev/`,
    )
    return res.json(response.data);
  } catch (err) {
    console.log(err);
  }
}
