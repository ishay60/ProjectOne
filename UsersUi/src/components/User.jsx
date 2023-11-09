import React, { useState } from "react";
import { updateUser } from "../api/usersApi";
import "./User.css";

const User = ({ userData }) => {
  const [user, setUser] = useState(userData);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await updateUser(user.id, user);
      setIsUpdating(false);
    } catch (error) {
      console.error("Failed to update user:", error);
      setIsUpdating(false);
    }
  };

  // Ensure the nested address object is properly set for controlled inputs
  if (!user.address) {
    user.address = { street: "", city: "", zipcode: "" };
  }

  return (
    <div className="user-container">
      <div
        className="user"
        onMouseEnter={() => setUser({ ...user, showMore: true })}
        onMouseLeave={() => setUser({ ...user, showMore: false })}
      >
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          disabled={isUpdating}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          disabled={isUpdating}
        />
        <button onClick={handleUpdate} disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update"}
        </button>
        {user.showMore && (
          <div className="additional-data">
            <input
              type="text"
              name="street"
              value={user.address.street}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <input
              type="text"
              name="city"
              value={user.address.city}
              onChange={handleChange}
              disabled={isUpdating}
            />
            <input
              type="text"
              name="zipcode"
              value={user.address.zipcode}
              onChange={handleChange}
              disabled={isUpdating}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
