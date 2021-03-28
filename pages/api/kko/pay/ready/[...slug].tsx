import Cors from 'cors'
import initMiddleware from '../../../../../lib/init-middleware'
import { NextApiRequest, NextApiResponse } from 'next'
import axios, {AxiosResponse} from 'axios'
import ObjectToFormData from '../../../../../lib/utils/object-to-formdata'

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

const baseURL = 'https://kapi.kakao.com';



export default async function handler(req:NextApiRequest , res:NextApiResponse) {
  // Run cors
  await cors(req, res)
  console.log(req.query)

  const data = {
    'cid':'TC0ONETIME',
    'partner_order_id': 'curious',
    'partner_user_id': 'jeager',
    'item_name': req.query.slug[0],
    'quantity': 1,
    'total_amount': Number(req.query.slug[1]),
    'tax_free_amount': 0,
    'approval_url': encodeURIComponent(req.query.slug[2]) + "/shop/result",
    'fail_url': req.query.slug[2],
    'cancel_url': req.query.slug[2],
};

  const FormData = ObjectToFormData(data)
  const kko_admin_key = process.env.kko_admin_key;
  
  const headers = {
    'Authorization': 'KakaoAK '+`${kko_admin_key}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  axios.defaults.headers.post = null
  
  
  const result = await axios.post(`${baseURL}/v1/payment/ready`, FormData, {headers})
  .then((res:AxiosResponse) => res.data).catch(err => console.log(err))
  
  
  return res.send(result)
}