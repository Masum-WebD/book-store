import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  
  let {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const handleRemoveBtn = (id) => {
    const request = window.confirm("Are you sure you want to Remove");
    if (request) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
           users.filter((user) => user._id !== id);
        });
    }
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5">
      <div className="text-left border-2 border-t-4 border-gray-400 border-t-green-400 rounded-md my-2 p-5">
        <h2 className="text-2xl font-bold text-gray-700">Manage All Users</h2>
        <h3 className="text-xl text-gray-500">
          There are {users.length} users on this site.
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
                handleRemoveBtn={handleRemoveBtn}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
