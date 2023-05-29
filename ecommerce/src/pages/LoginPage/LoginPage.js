import React from "react";
import LoginPageComponent from "../components/LoginPageComponent";
import axios from "axios";

const loginUserApiRequest = async (email, password, doNotLogout) => {
  const { data } = await axios.post("/api/users/login", {
    email,
    password,
    doNotLogout,
  });
  return data;
};

function LoginPage() {
  return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} />;
}

export default LoginPage;
