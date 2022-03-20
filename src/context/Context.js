import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const authContext = createContext();

const Context = ({ children }) => {
  const allContext = useFirebase();
  return (
    <authContext.Provider value={allContext}>{children}</authContext.Provider>
  );
};

export default Context;
