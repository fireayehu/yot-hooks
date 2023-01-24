import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    firstName: "Abebe",
    lastName: "Kebede",
  });
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
