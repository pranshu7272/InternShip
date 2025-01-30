import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { fetchUsers, addUser, updateUser, deleteUser } from "./api";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    loadUsers();
  }, []);

  const handleFormSubmit = async (userData) => {
    try {
      if (editingUser) {
        await updateUser(editingUser.id, userData);
        setUsers(users.map(user => (user.id === editingUser.id ? { ...user, ...userData } : user)));
      } else {
        const newUser = await addUser(userData);
        setUsers([...users, { ...newUser, id: users.length + 1 }]); // JSONPlaceholder does not return real ID
      }
    } catch (error) {
      console.error("Error submitting user", error);
    }
    setShowForm(false);
    setEditingUser(null);
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setShowForm(true);
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id)); // Correctly remove user from state
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">User Management</h1>
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg mt-4"
          >
            Add User
          </button>
        </div>

        {showForm && <UserForm userToEdit={editingUser} onFormSubmit={handleFormSubmit} />}
        <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
      </div>
    </div>
  );
};

export default App;
