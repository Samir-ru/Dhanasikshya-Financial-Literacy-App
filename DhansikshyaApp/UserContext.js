// UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [Gemail, setGEmail] = useState('');

  return (
    <UserContext.Provider value={{Gemail, setGEmail }}>
      {children}
    </UserContext.Provider>
  );
};
