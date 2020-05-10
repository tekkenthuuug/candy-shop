import fetchJSON from "./fetchJSON";

import { API_BASE_URL } from "./constants";

const get = () => {
  return localStorage.getItem("token");
};

const set = (token) => {
  localStorage.setItem("token", token);
};

const remove = () => {
  localStorage.removeItem("token");
};

const checkTokenValidity = (successCallback, errorCallback) => {
  const token = get();
  if (!token) {
    errorCallback("There is no token in local storage");
  } else {
    fetchJSON(`${API_BASE_URL}/user`, {
      method: "get",
      headers: { Authorization: "Bearer " + token },
    }).then((data) => {
      if (!data.message) {
        successCallback(data);
      } else if (errorCallback) {
        errorCallback(data);
      }
    });
  }
};

export default { get, set, remove, checkTokenValidity };
