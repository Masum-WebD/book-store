import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import Checkout from './Checkout';
const stripePromise = loadStripe('pk_test_51LXxS0A5hc9xpUZ0CEbGeEedP2aIPPZpBzZdbG06uyyBR9ahciDm6QGz74sI3znpXTft85sRDrLtoPK7Y0HhdMTI000YHEQavk');

const Payment = ({price}) => {
    // console.log(price)
    
    return (
        <div className='max-w-[1196px] mx-auto lg:px-0 px-5'>
            <Elements stripe={stripePromise}>
                <Checkout price={price} />
                </Elements>
        </div>
    );
};

export default Payment;