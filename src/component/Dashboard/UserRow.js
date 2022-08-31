import React from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, refetch, index }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Sorry! Failed to Make an admin',
            showConfirmButton: false,
            timer: 2000
          });
        }
        return res.json();
      })

      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successfully made an admin',
            showConfirmButton: false,
            timer: 2000
          });
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
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Remove "${email}" this user`,
              showConfirmButton: false,
              timer: 2000
            });
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
