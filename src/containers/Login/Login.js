import React, { useState } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { API_BASE_URL, ROUTES } from "../../utils/constants";
import useForm from "../../hooks/useForm";

import "./Login.scss";

const Login = (props) => {
  const login = () =>
    fetchJSON(`${API_BASE_URL}/login`, {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password,
      }),
    }).then((response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
        props.history.push(ROUTES.shop)
      } else {
        setMessage(response.message);
      }
    });
  const { inputs, handleSubmit, handleInputChange } = useForm(login);
  const [message, setMessage] = useState("");
  return (
    <div className="page-container login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Enter username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleInputChange}
          value={inputs.username}
        />

        <label htmlFor="password">Enter your password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />

        <button
          disabled={
            inputs.username === undefined || inputs.password === undefined
          }
        >
          Login
        </button>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default Login;
