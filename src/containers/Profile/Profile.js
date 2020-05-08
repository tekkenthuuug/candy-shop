import React, { useEffect, useState } from "react";
import "./Profile.scss";
import fetchJSON from "../../utils/fetchJSON";
import { API_BASE_URL, ROUTES } from "../../utils/constants";

const Profile = (props) => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchJSON(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: { Authorization: token },
    }).then((data) => {
      if (data["message"] !== undefined) {
        props.history.push(ROUTES.login);
      }
      setProfileInfo(data);
    });
  }, [props.history]);

  const orders =
    profileInfo.orders === undefined
      ? null
      : profileInfo.orders.map((order) => {
          const items = order.items.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
              </tr>
            );
          });
          return (
            <div className="order">
              <div className="order-info">
                <div>Order ID: {order.id}</div>
                <div>Created at: {order.created_at}</div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>{items}</tbody>
              </table>
            </div>
          );
        });
  return (
    <div className="page-container profile-page">
      <div className="profile-password">
      </div>
      <div className="profile-history">
        {Object.keys(profileInfo).length === 0 ? (
          <h2>You doesn't have any order yet</h2>
        ) : (
          <h2>Your orders history</h2>
        )}
        {orders}
      </div>
    </div>
  );
};

export default Profile;
