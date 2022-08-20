import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useCartBooks from "../component/Hooks/useCartBooks";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cartProduct] = useCartBooks();
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [user] = useAuthState(auth);

  let cartTotal = cartProduct.reduce(
    (cPrice, PrPrice) => cPrice + parseInt(PrPrice.price),
    0
  );
  let tax = (cartTotal / 100) * 2;
  let shopping = 50;

  const subTotal = cartTotal + tax + shopping;

  useEffect(() => {
    const price = {
      cartTotal: cartTotal,
      tax: tax,
      shopping: shopping,
      subTotal: subTotal,
    };
    fetch("https://p-hero-bookshop.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(price),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [subTotal, cartTotal, tax, shopping]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || " ");

    // confirm payment
    //       const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //           payment_method: {
    //             card: card,
    //             billing_details: {
    //               name: `${ user?.displayName }`,
    //               email: `${ user?.email }`,
    //             },
    //           },
    //         },
    //       );

    //       if(intentError){
    //         setCardError(intentError?.message)
    //       }
    //       else{
    //         setCardError('')
    //         console.log(paymentIntent)
    //         setSuccess('your payment is success')
    //       }
  };
  console.log(cardError);

  return (
    <>
      <form className="text-black" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary px-10 py-5 text-center"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError} </p>}
      {success && <p className="text-green-500">{success} </p>}
    </>
  );
};

export default CheckoutForm;
