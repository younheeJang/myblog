
  import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

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

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
  // Rest of the API logic
  
  const id = process.env.ch_engine_projectID;
  
console.log(id)
return res.json(id)
}