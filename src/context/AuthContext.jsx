import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logIn, setLogIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const login = (userData) => {
    setLogIn(true);
    setUserInfo(userData);
  };

  const logout = () => {
    setLogIn(false);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ logIn, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
