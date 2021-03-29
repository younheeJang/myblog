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
  
    
  
  const KakaoPayReady = async ({ Name, Price }) => {
   
    const baseUrl = window.location.protocol + "//" + window.location.host
    const protocol = window.location.protocol;
    const host= window.location.host;
    console.log('started')
    //const result = await fetch('/api/kko/pay/ready').then(res => res.json())
    //const result = await axios.get(`/api/kko/pay/ready/${encodeURIComponent(Name)}/${encodeURIComponent(Price)}/${encodeURIComponent(baseUrl).replace(/%3A%2F%2F/g, "://").replace(/%3A/g, ":")}`).then(res => res.data).catch(err => console.log(err))
    const result = await fetch(`/api/kko/pay/ready/${encodeURIComponent(Name)}/${encodeURIComponent(Price)}/${protocol}/${host}`).then(res => res.json())
    console.log(result)
    const tid = result['tid']
    console.log(tid)
    localStorage.setItem('tid', tid)
    window.location.href = result['next_redirect_pc_url']
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
               className=' h-5 w-10 lg:-my-10 lg:mx-40 md:-my-10 md:mx-72 -my-10 ml-3' onClick={()=>{KakaoPayReady({Name, Price})}}/>     
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

