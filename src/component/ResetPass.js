import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../Firebase/firebase.init';
import Loading from './Loading';
import forgetPass from '../asset/Images/Forgot password-pana-min.png';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import PageTitle from './PageTitle';

const ResetPass = () => {

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    console.log(error)

    if (error) {
        Swal.fire(
            'We cannot find this user. Please check your email and try again',
            '',
            'error'
        )
    };

    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email);
        reset();
        Swal.fire(
            'Reset link sent successfully. Please check your email !!',
            '',
            'success'
        )
    };

    return (
        <section>

            {
                sending ?

                    <Loading />

                    :

                    <div className='min-h-screen lg:grid lg:grid-cols-2 bg-[#F8F3FF] lg:px-32'>
                        <PageTitle title="Forgot Password" />
                        <div>
                            <img src={forgetPass} className="hidden lg:block mx-auto mt-24 drop-shadow-lg" alt="" />
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className="card flex-shrink-0 lg:w-96 w-80 mt-24">
                                <p className='text-center font-bold mt-3 underline underline-offset-4 text-2xl text-neutral'>RESET YOUR PASSWORD</p>
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-neutral">Your existing email</span>
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

                                        <input type="submit" value='Reset Password' className="btn btn-primary text-white w-full mt-3" />
                                    </form>


                                    <Link to="/Login" className="text-center text-sm label-text-alt link link-hover mt-2 text-neutral">Return to login page</Link>
                                </div>
                            </div>
                        </div>

                    </div>
            }

        </section>
    );
};

export default ResetPass;