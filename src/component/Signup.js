import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import Loading from './Loading';
import bg from '../asset/Images/login-bg.jpg';
import logo from '../asset/Images/logo.png';
import googleIcon from '../asset/Icons/google.png';

const Signup = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true }
    );

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
            toast.success("Account created successful");
        }
    }, [from, user, googleUser, navigate]);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };

    if (googleError || error || updateError) {
        toast.error("Something went wrong. Please try again.");
    }

    return (
        <section>
            {
                loading || googleLoading || updating ?

                    <Loading />

                    :

                    <div className='min-h-screen bg-no-repeat bg-cover bg-fixed' style={{ backgroundImage: `url(${bg})` }}>

                        <div className='flex justify-center items-center'>
                            <div className="card flex-shrink-0 lg:w-96 w-80 shadow-2xl glass mt-24 mb-12">
                                <img className='w-48 mx-auto mt-4' src={logo} alt="" />
                                <p className='text-center font-bold mt-3 underline underline-offset-2 text-white'>CREATE NEW ACCOUNT</p>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Name</span>
                                            </label>
                                            <input type="text" placeholder="your name" className="input input-bordered text-black" {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Name is required"
                                                }
                                            })} />
                                            <label className="label">
                                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                            </label>
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Email</span>
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

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered text-black" {...register("password", {
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
                                            </label>
                                        </div>

                                        <input type="submit" value='Sign Up' className="btn text-white w-full mt-3" />
                                    </form>
                                    <div className="divider">OR</div>
                                    <div className="form-control">
                                        <button onClick={() => signInWithGoogle()} className="btn btn-outline hover:text-black" >
                                            <img src={googleIcon} className='w-5 mr-2' alt="" /> Continue with google
                                        </button>
                                    </div>
                                    <Link to="/login" className="text-center text-sm label-text-alt link link-hover mt-2 text-white">Already have an account? Login</Link>
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </section>
    );
};

export default Signup;