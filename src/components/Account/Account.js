import React from "react";

import localToken from "../../utils/localToken";

import account from "../../img/avatar.svg";

import { ROUTES } from "../../utils/constants";

const Account = ({ history }) => {
  const handleOnClick = () => {
    if (localToken.get()) {
      history.push(ROUTES.profile);
    } else {
      history.push(ROUTES.login);
    }
  };
  return (
    <div onClick={handleOnClick} style={{ cursor: "pointer" }}>
      <img src={account} alt="Account icon" />
    </div>
  );
};

export default Account;
