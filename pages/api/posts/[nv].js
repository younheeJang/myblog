import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

export const config = {
  api: {
    externalResolver: true,
  },
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  const {
    query: { nv },
  } = req

  const client_id = process.env.nv_client_id;
  const client_secret = process.env.nv_client_secret;
    const datas = await fetch(`https://openapi.naver.com/v1/search/blog?query=${nv}`, {
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
    return res.json()});
  let posts = datas.items
  console.log(posts)
  //let result = res.json({ message: 'Hello Everyone!' })
  return posts
}

