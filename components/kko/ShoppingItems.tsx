import React from 'react';
import axios from 'axios';

interface ShoppingItemProps {
  Id: string;
  Category: string;
  Name: string;
  Image: string;
  Price: number;
};

const ShoppingItems: React.FC<ShoppingItemProps[]> = () => {

  const KakaoPayReady = async () => {
    console.log('started')
    await fetch('/api/kko/pay')
  }
  const baseURL = 'https://kapi.kakao.com';
  const KakaoPayReady1 = async () => {
    const data = {
      cid:'TC0ONETIME',
      partner_order_id: '1234',
      partner_user_id: 'jeager',
      item_name: 'flower',
      quantity: 100,
      total_amount: 1640000,
      tax_free_amount: 0,
      approval_url:'http:localhost:3000/shop/items',
      cancel_url: 'http:localhost:3000',
      fail_url: 'http:localhost:3000',
  };
    const kko_admin_key = process.env.kko_admin_key;
    const headers = {
      'Authorization': 'KakaoAK '+`${kko_admin_key}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      mode: 'no-cors',
    }
    axios.defaults.headers.post = null
     await axios.post(`${baseURL}/v1/payment/ready`, data, {headers})
    .then(res => {
      console.log('send ok', res.data)
    }).catch(err => console.log(err))
  
  }
const items : ShoppingItemProps[]= [
  {
    Id: 'qw123',
    Category: 'BOUQUET',
    Name: 'PINK',
    Image: '/images/flower1.jpg',
    Price: 16200
  },
  {
    Id: 'as123',
    Category: 'BOUQUET',
    Name: 'RED',
    Image: '/images/flower2.jpg',
    Price: 13400
  }
]
 
  return (
    <>
   {items && items.map(({ Id, Category, Name, Image, Price }) => (
     <div key={Id} className="cursor-pointer lg:w-1/4 md:w-1/2 sm:w-full p-4">
        <a className="block h-60 ">
          <img alt="product-flower1" className=" rounded object-cover object-center w-full h-full block" src={Image} />
          <img alt='payment' src='/images/payment_icon_yellow_small.png' 
               className=' h-5 w-10 lg:-my-10 lg:mx-40 md:-my-10 md:mx-72 -my-10 ml-3' onClick={KakaoPayReady}/>     
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{Category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{Name}</h2>
          <p className="mt-1">{Price}</p>
        </div>
      </div>
      ))}
      </>
     
  );
};

export default ShoppingItems;

