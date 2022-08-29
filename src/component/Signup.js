import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import Loading from './Loading';
import signup from '../asset/Images/Sign up-amico-min.png';
import googleIcon from '../asset/Icons/google.png';
import Swal from 'sweetalert2';
import useToken from './Hooks/useToken.js'


const Signup = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth,
        { sendEmailVerification: true }
    );

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [token] = useToken(user || googleUser)

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();


    useEffect(() => {
        if (token || user || googleUser) {
            navigate(from, { replace: true });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registration Successful',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }, [from, user, googleUser, navigate, token]);

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset();
    };

    if (googleError || error || updateError) {
        return Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Please try again after some minutes',
        });
    }

    return (
        <section>
            {
                loading || googleLoading || updating ?

                    <Loading />

                    :

                    <div className='min-h-screen lg:grid lg:grid-cols-2 bg-[#F8F3FF] lg:px-32'>

                        <div>
                            <img src={signup} className="hidden lg:block mx-auto mt-24 drop-shadow-lg" alt="" />
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className="card flex-shrink-0 lg:w-96 w-80 mt-24 mb-12">
                                <p className='text-center font-bold mt-3 underline text-2xl underline-offset-4 text-neutral'>CREATE NEW ACCOUNT</p>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-neutral">Name</span>
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
                                                <span className="label-text text-neutral">Email</span>
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
                                                <span className="label-text text-neutral">Password</span>
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

                                        <input type="submit" value='Sign Up' className="btn btn-primary text-white w-full mt-3" />
                                    </form>
                                    <div className="divider text-neutral">OR</div>
                                    <div className="form-control">
                                        <button onClick={() => signInWithGoogle()} className="btn btn-outline text-neutral hover:text-neutral" >
                                            <img src={googleIcon} className='w-5 mr-2' alt="" /> Continue with google
                                        </button>
                                    </div>
                                    <Link to="/login" className="text-center text-sm label-text-alt link link-hover mt-2 text-neutral">Already have an account? Login</Link>
                                </div>
                            </div>
                        </div>

                    </div >
            }
        </section >
    );
};

export default Signup;