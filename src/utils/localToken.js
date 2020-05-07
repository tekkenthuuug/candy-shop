import fetchJSON from "./fetchJSON";

import { API_BASE_URL } from "./constants";

const get = () => {
  return localStorage.getItem("token");
};

const set = (token) => {
  localStorage.setItem("token", token);
};

const checkTokenValidity = (successCallback, errorCallback) => {
  const token = get();
  if (!token) {
    errorCallback("Token is not defined");
  } else {
    fetchJSON(`${API_BASE_URL}/user`, {
      method: "get",
      headers: { Authorization: token },
    }).then((data) => {
      if (!data.message) {
        successCallback(data);
      } else if (errorCallback) {
        errorCallback(data);
      }
    });
  }
};

export { get, set, checkTokenValidity };
