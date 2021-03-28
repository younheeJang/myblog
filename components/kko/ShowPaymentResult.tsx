import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

interface AmountProps{
    discount: number;
    point: number;
    tax_free: number;
    total: number;
    vat: number;
}
interface ShoppingResultProps {
    aid: string;
    amount: AmountProps;
    approved_at: string;
    cid: string;
    created_at: string;
    item_name: string;
    partner_order_id: string;
    partner_user_id: string;
    payment_method_type: string;
    quantity: number;
    tid: string;

}
const ShowPaymentResult: React.FC<ShoppingResultProps> = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    const [paymentResult, setPaymentResult] = useState(null);
    useEffect(()=>{
        setOpen(true)
    })
    let payments: ShoppingResultProps
    const { query } = useRouter();
    (async function(){
        if(typeof window !== 'undefined'){
            const pg_token: string = String(query.pg_token)
            const tid: string = String(window.localStorage.getItem('tid'))
            
            if(pg_token !== 'undefined' && tid !== 'undefined'){
            const result = await fetch(`/api/kko/pay/approve/${encodeURIComponent(pg_token)}/${encodeURIComponent(tid)}`).then(res => res.json())
            payments = result
            setPaymentResult(payments)
            }
            }
      })();
    
   
  return (
    <>
    {isOpen && paymentResult && <div className='p-4'>
        요청하신 {paymentResult['item_name']}에 대한 결제건이  
    성공적으로 완료되었습니다. 
    <br></br>
    총 결제금액은 {paymentResult['amount']['total']} 입니다.
    </div>}
    
    </>
     
  );
};

export default ShowPaymentResult;

