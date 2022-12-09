import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [join, setJoin] = useState(false);

  const toggleUser = () => {
    setUser(!user);
  };
  const toggleJoin = () => {
    setJoin(!join);
  };
  const value = { toggleUser, user, join, toggleJoin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
