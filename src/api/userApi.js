const API_URL = "http://localhost:5000/api/users";

// Register User
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    credentials: "include", // allows sending cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Login User
export const loginUser = async (userData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

// Get Profile
export const getProfile = async () => {
  const res = await fetch(`${API_URL}/profile`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
};

// Logout
export const logoutUser = async () => {
  const res = await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return res.json();
};
