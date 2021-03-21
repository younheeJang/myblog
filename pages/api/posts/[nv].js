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
  const {
    query: { nv: searchingWord },
  } = req
  
  const client_id = process.env.nv_client_id;
  const client_secret = process.env.nv_client_secret;
  const datas = await fetch(`https://openapi.naver.com/v1/search/blog?query=${searchingWord}`, {
    headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
          res.end(body);
       } else {
     res.status(response.statusCode).end();
     console.log('error = ' + response.statusCode);
   }
 }).then((res) => { 
   
  return res});
  const result = await datas.json()


return res.json(result)
}