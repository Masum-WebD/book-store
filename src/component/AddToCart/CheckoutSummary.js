import React from 'react';
import useCartBooks from "../Hooks/useCartBooks";


const CheckoutSummary = () => {
  const [cartProduct] =useCartBooks()

  let cartTotal = cartProduct.reduce((cPrice,PrPrice)=>
    cPrice+ parseInt(PrPrice.price),0
  );
  let tax  = (cartTotal /100) *2;
  let shopping= 50;

  const subTotal = cartTotal + tax +shopping
 
  
  return (
    <div className="p-5 border border-red-100">
      <div className="py-4 border-b border-red-100">
        <div className="justify-between flex">
          <h1 className="text-sm font-medium text-neutral">Subtotal</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value={cartTotal}
          />
        </div>
        <div className="justify-between mt-3 flex">
          <h1 className="text-sm font-medium text-neutral">Shipping</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value={shopping}
          />
        </div>
        <div className="justify-between mt-3 flex">
          <h1 className="text-sm font-medium text-neutral">Taxes</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value={tax }
          />
        </div>
      </div>
      <div className="py-3 flex justify-between border-b border-red-100">
        <h1 className="text-sm font-medium text-neutral">Total</h1>
        <input
          className="text-sm bg-white w-10 font-medium"
          type="text"
          name="subTotal"
          disabled
          value={subTotal }
        />
      </div>
      <button className='btn btn-primary  hover:bg-[#3f9866] text-white rounded-sm mt-4 w-full'>Place Order</button>


    </div>
  );
};

export default CheckoutSummary;