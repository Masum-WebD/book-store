import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../Firebase/firebase.init';
import { toast } from 'react-toastify';
import Loading from './Loading';
import bg from '../asset/Images/login-bg.jpg';
import logo from '../asset/Images/logo.png';
import { Link } from "react-router-dom";

const ResetPass = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    if (error) {
        toast.error("Something went wrong. Please check your email and try again");
    };

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        toast.success('Reset link sent successfully. Please check your email !!');
    };

    return (
        <section>

            {
                sending ?

                    <Loading />

                    :

                    <div className='min-h-screen bg-no-repeat bg-cover bg-fixed' style={{ backgroundImage: `url(${bg})` }}>

                        <div className='flex justify-center items-center'>
                            <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl glass mt-24">
                                <img className='w-48 mx-auto mt-4' src={logo} alt="" />
                                <p className='text-center font-bold mt-3 underline underline-offset-2 text-white'>RESET YOUR PASSWORD</p>
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Your existing email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered text-black" {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required"
                                                },
                                                pattern: {
                                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                    message: "Provide a valid email"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                            </label>
                                        </div>

                                        <input type="submit" value='Reset Password' className="btn text-white w-full mt-3" />
                                    </form>


                                    <Link to="/Login" className="text-center text-sm label-text-alt link link-hover mt-2 text-white">Return to login page</Link>
                                </div>
                            </div>
                        </div>

                    </div>
            }

        </section>
    );
};

export default ResetPass;