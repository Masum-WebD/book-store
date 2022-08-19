import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../Firebase/firebase.init";
import CheckoutForm from "./CheckoutForm"

const PaymentUi = () => {
  const [user] = useAuthState(auth);
  const stripePromise = loadStripe(
    "pk_test_51LXxS0A5hc9xpUZ0CEbGeEedP2aIPPZpBzZdbG06uyyBR9ahciDm6QGz74sI3znpXTft85sRDrLtoPK7Y0HhdMTI000YHEQavk"
  );
  return (
    <div className='mt-20'>
      <h1 className="text-2xl font-bold text-black"> Hey { user?.displayName }</h1>
      
      <div class="card w-96 h-[500px] flex mx-auto mt-10  text-black">
        <Elements className='text-black' stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentUi;
