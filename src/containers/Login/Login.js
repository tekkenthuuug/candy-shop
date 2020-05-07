import React, { useState } from "react";

import fetchJSON from "../../utils/fetchJSON";

import useLoginForm from "../../hooks/useLoginForm";

import { API_BASE_URL, ROUTES } from "../../utils/constants";

import "./Login.scss";

const Login = (props) => {
  const onSubmit = () => {
    fetchJSON(`${API_BASE_URL}/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...values,
      }),
    }).then((res) => {
      const { token, message } = res;
      if (token) {
        localStorage.setItem("token", token);
        props.history.push(ROUTES.shop);
      } else {
        setErrorMessage(message);
      }
    });
  };

  const { values, handleSubmit, handleInputChange } = useLoginForm(onSubmit);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="page-container login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleInputChange}
          value={values.username}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={values.password}
        />

        <button disabled={!values.username || !values.password}>Login</button>
        <div>{errorMessage}</div>
      </form>
    </div>
  );
};

export default Login;
