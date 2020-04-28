import React, { useState, useEffect } from "react";

import fetchJSON from "../../utils/fetchJSON";
import { API_BASE_URL } from "../../utils/constants";

import "./ItemPage.scss";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";

const ItemPage = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    fetchJSON(`${API_BASE_URL}/items/${props.match.params.id}`, {
      method: "get",
    }).then((data) => {
      if (data.result[0].name) {
        setItem(data.result[0]);
      }
    });
  }, [props.match.params.id]);

  return (
    <div className="page-container item-page">
      <div className="item-page__container">
        <div className="item-page__img">
          <img src={item.img} alt={item.title} />
        </div>
        <div className="item-page__info">
          <h2>{item.name}</h2>
          <p className="item-page__id">Product ID: {item.id}</p>
          <p className="item-page__description">{item.description}</p>
          <div className="item-page__add-wrapper">
            <AddToCartButton item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
