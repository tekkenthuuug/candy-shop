import React, { useEffect, useState } from "react";
import fetchJSON from "../../utils/fetchJSON";
import { API_BASE_URL, ROUTES } from "../../utils/constants";
import "./Profile.scss";

const Profile = (props) => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchJSON(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: { Authorization: token },
    }).then((data) => {
      if (data["message"]) {
        props.history.push(ROUTES.login);
      }
      setProfileInfo(data);
    });
  }, [props.history]);

  const orders = !profileInfo.orders ? (
    <p>There is no any purchases yet</p>
  ) : (
    profileInfo.orders.map((order) => {
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
          <div className="order-info bold">
            <div>Order ID: {order.id}</div>
            <div>
              Purchased:{" "}
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
              }).format(new Date(order.created_at))}
            </div>
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
    })
  );
  return (
    <div className="page-container profile-page">
      <div className="profile-password"></div>
      <div className="profile-history">
        <h2>Your orders history</h2>
        {orders}
      </div>
    </div>
  );
};

export default Profile;
