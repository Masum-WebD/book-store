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

<<<<<<< HEAD
  const subTotal = cartTotal + tax + shopping;

  useEffect(() => {
    const price = {
      cartTotal: cartTotal,
      tax: tax,
      shopping: shopping,
      subTotal: subTotal,
    };
    fetch("http://localhost:5000/create-payment-intent", {
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
=======
  const subTotal = cartTotal + tax +shopping

  useEffect(()=>{

    // const price={
    //   cartTotal:cartTotal,
    //   tax:tax ,
    //   shopping:shopping,
    //   subTotal:subTotal

    // }
    fetch('http://localhost:5000/create-payment-intent',{
        method: 'POST',
        headers: {
            'content-type':'application/json',
            // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify({subTotal})
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
        if(data?.clientSecret){

            setClientSecret(data.clientSecret)
        }
    })
  },[subTotal])
    const handleSubmit= async (e)=>{
      e.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

        if (card == null) {
        return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
            setCardError(error?.message || ' ');
        
          // confirm payment 
          const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            console.log(clientSecret),
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: `${ user?.displayName }`,
                  email: `${ user?.email }`,
                },
              },
            },
          );

         
          if(intentError){
            setCardError(intentError?.message)
          }
          else{
            setCardError('')
            console.log(paymentIntent)
            setSuccess('your payment is success')
          }
    }
    console.log(cardError)
>>>>>>> 8bab4b15be212db5ff9cf160344581b3ad59b580

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
<<<<<<< HEAD
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
=======
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary px-10 py-5 text-center"type="submit" disabled={!stripe || !clientSecret  }>
        Pay
      </button>
    </form>
    {
        cardError && <p className="text-red-500">{cardError} </p>
    }
    {
        success && <p className="text-green-500">{success} </p>
    }
        
        </>
    );
>>>>>>> 8bab4b15be212db5ff9cf160344581b3ad59b580
};

export default CheckoutForm;
