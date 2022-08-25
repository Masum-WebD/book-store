import React, { useState } from "react";
import { useAuthState, useUpdateEmail, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { BsInfoCircleFill } from 'react-icons/bs';
import Loading from "../Loading";
import Swal from "sweetalert2";
import { ImCross } from 'react-icons/im';
import userProfile from "../../asset/Icons/user.png";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, profileUpdating, profileError] = useUpdateProfile(auth);
  const [updateEmail, emailUpdating, emailError] = useUpdateEmail(auth);

  const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  if (profileUpdating || emailUpdating) {
    return <Loading />
  }

  const editEmail = () => {
    Swal.fire(
      'Privacy Warning',
      'We are unable to allow you to modify your email due to privacy concerns.',
      'warning'
    )
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

        <div className="mb-5">

          <div class="avatar">
            <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL ? user.photoURL : userProfile} alt="" />
            </div>
          </div>
          <br />

          <label for="my-modal-9" class="btn btn-link modal-button">Edit profile picture</label>

          <input type="checkbox" id="my-modal-9" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <div className="flex justify-between items-center">
                <h3 class="font-bold text-3xl text-black">Add your picture link</h3>
                <label for="my-modal-9" class="btn btn-sm btn-primary text-white btn-circle"><ImCross /></label>
              </div>
              <input type="link" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered w-full mt-9 text-black border-gray-500 focus:outline-gray-500" />
              <div class="modal-action">
                {/* <a href="https://imgbb.com/" target="_blank" rel="noreferrer" className="hover:link text-left text-xs mt-2 text-gray-500">How do I upload my image link?</a> */}
                <label for="my-modal-9" onClick={async () => {
                  await updateProfile({ photoURL });
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Profile picture updated Successfully",
                    showConfirmButton: false,
                    timer: 2000,
                  });
                }} class="btn btn-primary text-white">UPDATE</label>
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between border border-gray-500 px-3 rounded">

          <div className="flex items-center">
            <p className="text-black lg:text-lg text-sm text-left uppercase">Name: </p>
            <p className="text-black text-sm lg:text-base ml-3">{user?.displayName}</p>
          </div>

          <div>
            <label for="my-name-modal" class="btn btn-link modal-button">Edit</label>
          </div>

          <input type="checkbox" id="my-name-modal" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <div className="flex justify-between items-center">
                <h3 class="font-bold text-3xl text-black">Edit your name</h3>
                <label for="my-name-modal" class="btn btn-sm btn-primary text-white btn-circle"><ImCross /></label>
              </div>
              <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="input input-bordered w-full mt-6 text-black border-gray-500 focus:outline-gray-500" />
              <div class="modal-action">
                <label for="my-name-modal" onClick={async () => {
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
            <button onClick={() => editEmail()} class="btn btn-link">Edit</button>
          </div>
        </div>



      </div>

    </section>
  );
};

export default MyProfile;
