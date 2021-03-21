import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'
import axios from 'axios'

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
    query: { uid: username, upw: password },
  } = req
  
  const projectID = process.env.ch_engine_projectID;
  const authObject = { 'Project-ID' : projectID, 'User-Name': username, 'User-Secret': password}
        console.log(authObject["Project-ID"])
        await axios.get('https://api.chatengine.io/chats', { headers: authObject }, function(error, response, body){
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
          
          console.log(result)
          return res.json(result)
    }
 