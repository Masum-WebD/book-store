import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://book-store-46yi.onrender.com/user/admin/${email}`, {
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
  const handleRemoveBtn = (email) => {
    const request = window.confirm("Are you sure you want to Remove");
    if (request) {
      fetch(`https://book-store-46yi.onrender.com/user/${email}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success(`Remove "${email}" this user`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th className="text-gray-600">{index + 1}</th>
      <td className="text-gray-700">{email}</td>
      <td className="text-gray-600">
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs bg-primary">
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs bg-primary">
            Admin
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleRemoveBtn(email)}
          className="btn btn-xs bg-red-400"
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
