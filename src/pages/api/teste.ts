import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      `https://gh7jn770za.execute-api.us-east-2.amazonaws.com/default/renavam-query/${req.query.plate}`,
      {
        headers: {
          "X-Api-Key": "fWsGD3UI9x8MawgKHlFv6zJDtXXzkmD2Rzt07Aq9"
        },
      })
    return res.json(response.data);
  } catch (err) {
    console.log(err);
  }
}
