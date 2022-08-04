import React from 'react';

const CheckoutSummary = () => {
  return (
    <div className="p-5">
      <div className="py-4 border-b border-red-100">
        <div className="justify-between flex">
          <h1 className="text-sm font-medium text-neutral">Subtotal</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value="$100"
          />
        </div>
        <div className="justify-between mt-3 flex">
          <h1 className="text-sm font-medium text-neutral">Shipping</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value="$100"
          />
        </div>
        <div className="justify-between mt-3 flex">
          <h1 className="text-sm font-medium text-neutral">Taxes</h1>
          <input
            className="text-sm bg-white w-10 font-medium"
            type="text"
            name="subTotal"
            disabled
            value="$100"
          />
        </div>
      </div>
      <button className='btn btn-outline btn-primary  hover:bg-[#3f9866] text-black mt-10'>Place Order</button>


    </div>
  );
};

export default CheckoutSummary;