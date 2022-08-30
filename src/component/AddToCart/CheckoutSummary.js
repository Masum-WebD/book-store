import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartBooks from "../Hooks/useCartBooks";



const CheckoutSummary = () => {
  const [cartProduct] = useCartBooks()
  // console.log(cartProduct)

  const navigate = useNavigate();


  const cartTotal = cartProduct.reduce((cPrice, PrPrice) =>
    cPrice + parseInt(PrPrice?.price), 0
  );
  const tax = (cartTotal / 100) * 2;
  const shopping = 50;

  const subTotal = cartTotal + tax + shopping

  const handleOrder = (e) => {
    e.preventDefault();
    // const orderProduct = {
    //   Name:cartProduct,
    //   Product:{
    //     cartProduct:[...cartProduct]
    //   },
    //   Price: subTotal,
    //   Quantity: cartProduct.length
    // }

    fetch('https://book-store-46yi.onrender.com/order', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ subTotal })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    navigate('/paymentUi')

  }




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
            value={tax}
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
          value={subTotal}
        />
      </div>
      <button onClick={(e) => handleOrder(e)} className='btn btn-primary  hover:bg-secondary border-none text-white rounded-sm mt-4 w-full'>Place Order</button>


    </div>
  );
};

export default CheckoutSummary;