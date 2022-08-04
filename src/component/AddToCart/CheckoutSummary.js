import React from 'react';

const CheckoutSummary = () => {
    return (
        <div className=" card   text-black h-[310px] w-[400px]">
        <h1 className="text-center font-bold text-xl">Checkout summary</h1>
        <div className="mt-5">
          <div className="flex  border-b justify-between ">
            <h1>Subtotal</h1>
            <input
              className="focus:outline-0 ml-10 disabled w-[100px] "
              type="text"
              name="subTotal"
              id=""
            />
          </div>
          <div className="mt-5">
            <div className="flex justify-between border-b ">
              <h1>Shipping</h1>
              <input
                className="focus:outline-0  ml-10 disabled w-[100px] "
                type="text"
                name="subTotal"
                id=""
              />
            </div>
            <div className="mt-5">
              <div className="flex justify-between border-b  ">
                <h1>Total</h1>
                <input
                  className="focus:outline-0 ml-10 disabled w-[100px] "
                  type="text"
                  name="subTotal"
                  id=""
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex  border-b ">
                <h1 className="text-[#9c9c9c] text-lg">Payable Total</h1>
                <input
                  className="focus:outline-0 ml-10 disabled w-[100px] "
                  type="text"
                  name="subTotal"
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <button className='btn btn-outline btn-primary  hover:bg-[#3f9866] text-black mt-10'>Place Order</button>

        
      </div>
    );
};

export default CheckoutSummary;