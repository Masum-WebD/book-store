import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index,handleRemoveBtn }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Sorry! Failed to Make an admin");
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th className='text-gray-600'>{index + 1}</th>
      <td>{email}</td>
      <td className='text-gray-600'>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs bg-primary">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button onClick={()=>handleRemoveBtn(user._id)}  className="btn btn-xs bg-red-400">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
