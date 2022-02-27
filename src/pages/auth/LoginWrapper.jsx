import React from "react";
import { useContext } from "react";
import Login from "./Login";
import LoginContext from "./LoginContext";
import Layout from "../../layouts/Layout";

const LoginWrapper = () => {
  const { userInfo } = useContext(LoginContext);
  
  return (
    <div>{ userInfo
      ? (
        <Layout></Layout>
      )
      : (<Login />) }
    </div>
  );
};

export default LoginWrapper;