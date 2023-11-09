// src/api/usersApi.js
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data; // The data property of the response will be the users array
  } catch (error) {
    console.error("Error fetching users:", error);
    return []; // Return an empty array in case of error for graceful degradation
  }
};

export const getUserTodos = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}/todos`);
    return response.data; // The data property of the response will be the todos array for the user
  } catch (error) {
    console.error("Error fetching todos for user:", error);
    return []; // Return an empty array in case of error for graceful degradation
  }
};
// Update user details
export const updateUser = async (userId, updateData) => {
  try {
    // Note: JSONPlaceholder will not really update the user as it's a fake API,
    // but it will simulate the response as if it did.
    const response = await axios.put(`${API_URL}/users/${userId}`, updateData);
    return response.data; // This would be the updated user data
  } catch (error) {
    console.error("Error updating user:", error);
    throw error; // Rethrow the error so the calling function can handle it
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    // Note: JSONPlaceholder will not really delete the user but will simulate the response.
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    return response.data; // There's usually no content in a delete response
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error; // Rethrow the error so the calling function can handle it
  }
};
