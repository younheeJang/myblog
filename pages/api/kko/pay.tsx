import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    externalResolver: true,
  },
}

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req:NextApiRequest , res:NextApiResponse) {
  // Run cors
  await cors(req, res)

  const kko_admin_key = process.env.kko_admin_key;
  
  return
}