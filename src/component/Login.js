import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import bg from '../asset/Images/login-bg.jpg';
import logo from '../asset/Images/logo.png';
import auth from '../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from '../asset/Icons/google.png';
import Loading from './Loading';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
        toast.error("You closed the popup");
    };

    if (error?.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("You entered a wrong password");
    };

    if (error?.message === "Firebase: Error (auth/invalid-email).") {
        toast.error("Invalid Email");
    };

    if (error?.message === "Firebase: Error (auth/user-not-found).") {
        toast.error("No user found. Please check your E-mail");
    };

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password);
    };

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            toast.success("Login successful")
        }
    }, [from, user, googleUser, navigate,])


    return (
        <section>

            {
                loading || googleLoading ?

                    <Loading />

                    :

                    <div className='min-h-screen bg-no-repeat bg-cover bg-fixed' style={{ backgroundImage: `url(${bg})` }}>

                        <div className='flex justify-center items-center'>
                            <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl mt-24 glass mb-12">
                                <img className='w-48 mx-auto mt-4' src={logo} alt="" />
                                <p className='text-center font-bold mt-3 text-white underline-offset-2 underline'>USER LOGIN</p>
                                <div className="card-body">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Email</span>
                                            </label>
                                            <input type="email" placeholder="Your email" className="input input-bordered" {...register("email", {
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

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Password</span>
                                            </label>
                                            <input type="password" placeholder="Your password" className="input input-bordered" {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required"
                                                },
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters required"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                                <Link to="/reset-your-password"><span className="label-text-alt link-hover link text-white">Forget Password?</span></Link>
                                            </label>
                                        </div>

                                        <input type="submit" value='Log in' className="btn text-white w-full mt-3" />
                                    </form>

                                    <div className="divider">OR</div>
                                    <div className="form-control">
                                        <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:text-black" >
                                            <img src={googleIcon} className='w-5 mr-2' alt="" /> Continue with google
                                        </button>
                                    </div>
                                    <Link to="/create-new-account" className="text-center text-sm label-text-alt link link-hover mt-2 text-white">New here? Please create account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </section>
    );
};

export default Login;