import { faArrowLeft, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCartBooks from "../component/Hooks/useCartBooks";
import auth from "../Firebase/firebase.init";

const Checkout = ({ price }) => {
  const [user] = useAuthState(auth);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [cartProduct, setCartProduct] = useCartBooks();

  const email = user?.email;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
    } else {
      setCardError("");
      toast("Congrats!!! Your payment is completed.");
      setSuccess("Congrats!!! Your payment is completed.");
      setTransactionId(paymentIntent.id);
      setCartProduct("");
      console.log(paymentIntent);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#000000",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && <p className="text-red-500 mt-3">{cardError}</p>}
        {success && (
          <div className="text-secondary mt-3">
            <ToastContainer />
            <p>{success}</p>
            <p>
              Your transaction id:{" "}
              <span className="text-secondary font-bold">{transactionId}</span>
            </p>
            <div>
              <div className="flex  mx-auto justify-center">
                <FontAwesomeIcon
                  className="text-[25px] mr-2 mt-1 text-black"
                  icon={faFaceSmile}
                />
                <h1 className="text-black text-[25px] "> Happy journey</h1>
              </div>
            </div>
          </div>
        )}
        {success ? (
          <Link
            className="btn btn-sm btn-outline bg-secondary w-full mt-10"
            to="/all-products"
          >
            <button>
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} /> Go back for shopping
            </button>
          </Link>
        ) : (
          <button
            className="btn btn-sm btn-outline bg-secondary w-full mt-10"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay Now
          </button>
        )}
      </form>
    </>
  );
};

export default Checkout;
