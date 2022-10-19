import React from "react";
import "../WarehouseItem/WarehouseItem.scss";
import { Link } from "react-router-dom";
import chevron from "../../assets/Icons/chevron_right-24px.svg";

const WarehouseItem = ({ warehouse, handleSelectedProduct }) => {
  return (
    <article className="card">
      <div className="card__text-wrapper">
        <div className="card__left">
          <h5 className="card__label">Warehouse</h5>
          <Link to="/" className="card__name split">
            <p>{warehouse.name} </p>
            <img className="card__chevron" src={chevron} />
          </Link>
          <h5 className="card__label">Address</h5>
          <p className="card__address">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="card__right">
          <h5 className="card__label">Contact Name</h5>
          <p className="card__contact-name split">{warehouse.contact.name}</p>
          <h5 className="card__label">Contact Information</h5>
          <div className="card__contact-details">
            <p className="card__contact-phone">{warehouse.contact.phone}</p>
            <p className="card__contact-email">{warehouse.contact.email}</p>
          </div>
        </div>
      </div>
      <div className="card__buttons">
        <button
          onClick={(e) => handleSelectedProduct(warehouse)}
          className="card__delete-button"
        ></button>
        <button className="card__edit-button"></button>
      </div>
    </article>
  );
};

export default WarehouseItem;
