
import React, { useState, useEffect } from "react";

const UserForm = ({ userToEdit, onFormSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    if (userToEdit) {
      setFirstName(userToEdit.firstName);
      setLastName(userToEdit.lastName);
      setEmail(userToEdit.email);
      setDepartment(userToEdit.department);
    } else {
      setFirstName("");
      setLastName("");
      setEmail("");
      setDepartment("");
    }
  }, [userToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !department) {
      alert("Please fill all fields");
      return;
    }

    const userData = { firstName, lastName, email, department };
    onFormSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-lg font-semibold mb-4">{userToEdit ? "Edit User" : "Add User"}</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="p-2 border rounded" required />
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="p-2 border rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
        <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="p-2 border rounded" required />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg">
        {userToEdit ? "Update" : "Add"} User
      </button>
    </form>
  );
};

export default UserForm;
