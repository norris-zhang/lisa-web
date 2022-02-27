import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "./Login";
import LoginContext from "./LoginContext";

const LoginWrapper = () => {
  const { userInfo } = useContext(LoginContext);
  
  return (
    <div>{ userInfo
      ? (<Navigate to="/classes" replace={true} />)
      : (<Login />) }
    </div>
  );
};

export default LoginWrapper;