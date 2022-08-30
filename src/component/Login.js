import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import login from "../asset/Images/Tablet login-amico-min.png";
import auth from "../Firebase/firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../asset/Icons/google.png";
import Loading from "./Loading";
import Swal from "sweetalert2";
import useToken from './Hooks/useToken.js'

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user || googleUser)

  if (googleError?.message === "Firebase: Error (auth/popup-closed-by-user).") {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "You closed the popup, which will complete the process. Please try again.",
    });
  }

  if (error?.message === "Firebase: Error (auth/wrong-password).") {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "You entered a wrong password. Please try again.",
    });
  }

  if (error?.message === "Firebase: Error (auth/invalid-email).") {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "You entered a wrong email. Please try again.",
    });
  }

  if (error?.message === "Firebase: Error (auth/user-not-found).") {
    Swal.fire({
      icon: "error",
      title: "Something went wrong!",
      text: "No user found. Please check your E-mail and try again.",
    });
  }

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);

  };

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  useEffect(() => {
    if (token || user || googleUser) {
      navigate(from, { replace: true });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [from, token, navigate, user, googleUser]);

  return (
    <section>
      {loading || googleLoading ? (
        <Loading />
      ) : (
        <div className="min-h-screen lg:grid lg:grid-cols-2 bg-[#F8F3FF] lg:px-32">
          <div>
            <img src={login} className="hidden lg:block mx-auto mt-24 drop-shadow-lg" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <div className="card flex-shrink-0 lg:w-96 w-80 mt-24 mb-12">
              <p className="text-center text-3xl font-bold mt-3 text-neutral underline-offset-4 underline">
                USER LOGIN
              </p>
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-neutral">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="input input-bordered text-black"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-neutral">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Your password"
                      className="input input-bordered text-black"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters required",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      <Link to="/reset-your-password">
                        <span className="label-text-alt link-hover link text-neutral">
                          Forget Password?
                        </span>
                      </Link>
                    </label>
                  </div>

                  <input
                    type="submit"
                    value="Log in"
                    className="btn btn-primary text-white w-full mt-3"
                  />
                </form>

                <div className="divider text-neutral">OR</div>
                <div className="form-control">
                  <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline text-neutral hover:text-neutral"
                  >
                    <img src={googleIcon} className="w-5 mr-2" alt="" />{" "}
                    Continue with google
                  </button>
                </div>
                <Link
                  to="/create-new-account"
                  className="text-center text-sm label-text-alt link link-hover mt-2 text-neutral"
                >
                  New here? Please create account
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
