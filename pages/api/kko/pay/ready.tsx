import Cors from 'cors'
import initMiddleware from '../../../../lib/init-middleware'
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import ObjectToFormData from '../../../../lib/utils/object-to-formdata'

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
  
  const data = {
    'cid':'TC0ONETIME',
    'partner_order_id': 'curious',
    'partner_user_id': 'jeager',
    'item_name': 'flower',
    'quantity': 1,
    'total_amount': 10,
    'tax_free_amount': 0,
    'approval_url': 'http://localhost:3000',
    'fail_url': 'http://localhost:3000',
    'cancel_url': 'http://localhost:3000',
};

  const FormData = ObjectToFormData(data)
  const kko_admin_key = process.env.kko_admin_key;
  
  const headers = {
    'Authorization': 'KakaoAK '+`${kko_admin_key}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
  axios.defaults.headers.post = null
   await axios.post(`${baseURL}/v1/payment/ready`, FormData, {headers})
  .then(res => {
    console.log('send ok', res.data)
  }).catch(err => console.log(err))
  
  return
}