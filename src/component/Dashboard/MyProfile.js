import React, { useState } from "react";
import { useAuthState, useUpdateEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { BsInfoCircleFill } from 'react-icons/bs';
import Loading from "../Loading";
import Swal from "sweetalert2";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, profileUpdating, profileError] = useUpdateProfile(auth);
  const [updateEmail, emailUpdating, emailError] = useUpdateEmail(auth);

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');

  if (profileUpdating || emailUpdating) {
    return <Loading />
  }

  if (profileError || emailError) {
    return Swal.fire({
      icon: 'error',
      title: 'Something went wrong!',
      text: 'Please try again after some minutes',
    });
  }
  console.log(emailError)

  return (
    <section>

      <h1 className="text-3xl font-semibold text-center underline underline-offset-8 text-gray-600"><BsInfoCircleFill className="inline-block relative bottom-[2px]" /> Personal Information</h1>

      <div className="lg:px-36 px-3 mt-20">

        <div className="flex items-center justify-between border border-gray-500 px-3 rounded">

          <div className="flex items-center">
            <p className="text-black lg:text-lg text-sm text-left uppercase">Name: </p>
            <p className="text-black text-sm lg:text-base ml-3">{user?.displayName}</p>
          </div>

          <div>
            <label for="my-modal-6" class="btn btn-link modal-button">Edit</label>
          </div>

          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label for="my-modal-6" class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>
              <h3 class="font-bold text-lg text-black">Edit your name</h3>
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="input input-bordered w-full mt-3 text-black border-gray-500 focus:outline-gray-500" />
              <div class="modal-action">
                <label for="my-modal-6" onClick={async () => {
                  await updateProfile({ displayName });
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Name updated Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }} class="btn btn-primary text-white">UPDATE</label>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between border border-gray-500 px-3 rounded mt-5">

          <div className="flex items-center">
            <p className="text-black lg:text-lg text-sm text-left uppercase">Email: </p>
            <p className="text-black text-sm lg:text-base ml-3">{user?.email}</p>
          </div>

          <div>
            <label for="my-modal-7" class="btn btn-link modal-button">Edit</label>
          </div>

          <input type="checkbox" id="my-modal-7" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label for="my-modal-7" class="btn btn-sm btn-primary text-white btn-circle absolute right-2 top-2">✕</label>
              <h3 class="font-bold text-lg text-black">Edit your email</h3>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input input-bordered w-full mt-3 text-black border-gray-500 focus:outline-gray-500" />
              <div class="modal-action">
                <label for="my-modal-7" onClick={async () => {
                  await updateEmail(email);
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Email updated Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }} class="btn btn-primary text-white">UPDATE</label>
              </div>
            </div>
          </div>

        </div>



      </div>

    </section>
  );
};

export default MyProfile;
