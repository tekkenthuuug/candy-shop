import React, { useState } from "react";

import fetchJSON from "../../utils/fetchJSON";

import useForm from "../../hooks/useForm";
import localToken from "../../utils/localToken";

import { API_BASE_URL, ROUTES } from "../../utils/constants";

import "./Login.scss";
import { Link } from "react-router-dom";

const Login = (props) => {
  const { values, handleSubmit, handleInputChange } = useForm(onSubmit);
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit() {
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
        localToken.set(token);
        props.history.push(ROUTES.profile);
      } else {
        setErrorMessage(message);
      }
    });
  }

  return (
    <div className="page-container login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <legend>Login</legend>
        <p className="login-form__sub-legend">
          Don't have an account? <Link to={ROUTES.register}>Create now!</Link>
        </p>
        <div className="login-form__section">
          <label htmlFor="username">Enter username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleInputChange}
            value={values.username || ""}
          />
        </div>
        <div className="login-form__section">
          <label htmlFor="password">Enter your password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={values.password || ""}
          />
        </div>

        <button disabled={!values.username || !values.password}>Login</button>
        <div>{errorMessage}</div>
      </form>
    </div>
  );
};

export default Login;
