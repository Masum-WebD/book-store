import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";
import UserRow from "./UserRow";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://book-store-46yi.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="px-5">
      <div className="text-left border-2 border-t-4 border-gray-400 p-5 mb-5 border-t-purple-600 rounded-md mx-10">
        <h2 className="text-2xl font-bold text-gray-700">Manage All Users</h2>
        <h3 className="text-xl text-gray-500">
          There are <span className="text-primary">{users.length}</span> users on this site.
        </h3>
      </div>
      <div className="overflow-x-auto px-10">
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
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
