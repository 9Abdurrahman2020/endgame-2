import { useContext } from "react";
import { authContext } from "./Context";

const useAuth = () => {
  return useContext(authContext);
};

export default useAuth;
