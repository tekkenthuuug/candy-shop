import React, { useEffect, useState } from "react";

import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProfileOrders from "../../components/ProfileOrders/ProfileOrders";

import localToken from "../../utils/localToken";
import fetchJSON from "../../utils/fetchJSON";

import { API_BASE_URL, ROUTES } from "../../utils/constants";
import "./Profile.scss";

const Profile = (props) => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const token = localToken.get();
    fetchJSON(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }).then((data) => {
      if (data.message) {
        props.history.push(ROUTES.login);
      } else {
        setProfileInfo(data);
      }
    });
  }, [props.history]);

  if (!profileInfo.id) {
    return (
      <div className="page-container profile-page flex">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="page-container profile-page">
      <div className="profile-history">
        {profileInfo.orders.length && (
          <ProfileOrders orders={profileInfo.orders} />
        )}
      </div>
    </div>
  );
};

export default Profile;
