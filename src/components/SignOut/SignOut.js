import React from "react";

import localToken from "../../utils/localToken";

import { ROUTES } from "../../utils/constants";

import "./SignOut.scss";

const SignOut = ({ history }) => {
  const handleSignOut = () => {
    history.push(ROUTES.login);
    localToken.remove();
  };

  return (
    <button className="sign-out-btn primary-btn" onClick={handleSignOut}>
      Sign out
    </button>
  );
};

export default SignOut;
