const API_URL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

// Add a new user (JSONPlaceholder simulates success but doesn't save)
export const addUser = async (userData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Update a user
export const updateUser = async (userId, userData) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return response.json();
};

// Delete a user
export const deleteUser = async (userId) => {
  const response = await fetch(`${API_URL}/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");
  return {}; // JSONPlaceholder API always returns empty object {}
};
