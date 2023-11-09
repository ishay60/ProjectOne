// src/components/UsersMenu.js
import React from "react";
import UserList from "";
import TodoList from "./TodoList";
import { useUserData } from "../hooks/useUserData";

const UsersMenu = () => {
  const { users, selectedUser, todos, selectUser } = useUserData();

  return (
    <div className="users-menu">
      <UserList users={users} onSelectUser={selectUser} />
      <TodoList todos={todos} />
    </div>
  );
};

export default UsersMenu;
