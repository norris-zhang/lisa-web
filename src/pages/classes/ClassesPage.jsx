import { useContext } from "react";
import LoginContext from "../auth/LoginContext";

const ClassesPage = () => {
  const { userInfo } = useContext(LoginContext);

  return (
    <div>{ userInfo.displayName }</div>
  );
};

export default ClassesPage;