import React from 'react';
import useCartBooks from '../component/Hooks/useCartBooks';
import Payment from './Payment';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../Firebase/firebase.init";


const UiPayment =()=>{
    // const price = 500
    const [user] =useAuthState(auth)
    const [cartProduct,setCartProduct] =useCartBooks()
    const cartTotal = cartProduct.reduce((cPrice, PrPrice) =>
    cPrice + parseInt(PrPrice?.price), 0
  );
  const tax = (cartTotal / 100) * 2;
  const shopping = 50;

  const subTotal = cartTotal + tax + shopping
  console.log(subTotal)
    
    return (
        <div className='h-[500px] card text-primary' >
            <h1> Hi {user?.displayName}</h1>
            <h1> You will pay $ {subTotal} </h1>
            <div className="mx-auto w-[500px] text-black mt-20"  >
            <Payment price={subTotal}/>
            </div>
            
        </div>
    )
}
export default UiPayment