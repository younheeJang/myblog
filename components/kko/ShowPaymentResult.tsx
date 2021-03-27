import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const ShowPaymentResult: React.FC = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    useEffect(()=>{
        setOpen(true)
    })
    
    const { query } = useRouter();
    
    if(typeof window !== 'undefined'){
    const pg_token: string = String(query.pg_token)
    console.log(String(query.pg_token))
    const tid: string = String(window.localStorage.getItem('tid'))
    if(pg_token !== 'undefined' && tid !== 'undefined'){
        console.log(pg_token, tid)
    const result = fetch(`/api/kko/pay/approve/${encodeURIComponent(pg_token)}/${encodeURIComponent(tid)}`).then(res => res.json())
    console.log(result)
    }
    }
    
  
  return (
    <>
    {isOpen && <div></div>}
    </>
     
  );
};

export default ShowPaymentResult;

