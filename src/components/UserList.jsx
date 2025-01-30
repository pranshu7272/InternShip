import React from "react";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-gray-700">User List</h2>
      {users.length === 0 ? (
        <p className="text-gray-500">No users available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">ID</th>
                <th className="border p-2">First Name</th>
                <th className="border p-2">Last Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border p-2">{user.id}</td>
                  <td className="border p-2">{user.firstName}</td>
                  <td className="border p-2">{user.lastName}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.department}</td>
                  <td className="border p-2">
                    <button onClick={() => onEdit(user)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                    <button onClick={() => onDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
