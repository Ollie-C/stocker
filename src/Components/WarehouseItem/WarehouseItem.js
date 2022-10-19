import React from "react";
import "../WarehouseItem/WarehouseItem.scss";

const WarehouseItem = ({ warehouse, handleSelectedProduct }) => {
  return (
    <article className="card">
      <div className="card__text-wrapper">
        <div className="card__left">
          <h5 className="card__label">Warehouse</h5>
          <p className="card__name">{warehouse.name}</p>
          <h5 className="card__label">Address</h5>
          <p className="card__address">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="card__right">
          <h5 className="card__label">Contact Name</h5>
          <p className="card__contact-name">{warehouse.contact.name}</p>
          <h5 className="card__label">Contact Information</h5>
          <p className="card__contact-phone">{warehouse.contact.phone}</p>
          <p className="card__contact-email">{warehouse.contact.email}</p>
        </div>
      </div>
      <div>
        <button
          onClick={(e) => handleSelectedProduct(warehouse)}
          className="card__delete-button"></button>
        <button className="card__edit-button"></button>
      </div>
    </article>
  );
};

export default WarehouseItem;
