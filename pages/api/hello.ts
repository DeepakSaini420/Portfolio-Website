// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//https://api.github.com/users/DeepakSaini420/repos
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
