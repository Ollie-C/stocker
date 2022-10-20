import React from "react";
import { Link } from "react-router-dom";
import chevron from "../../assets/Icons/chevron_right-24px.svg";

const InventoryItem = ({ inventory }) => {
  return (
    <article className="card">
      <div className="card__text-wrapper">
        <div className="card__left">
          <h5 className="card__label">Warehouse</h5>
          {/* <Link
                to={`/warehouses/details/${warehouse.id}`}
                className="card__name split"
              > */}
          <p>{inventory.name}</p>
          <img className="card__chevron" src={chevron} />
          {/* </Link> */}
          <h5 className="card__label">Address</h5>
          <p className="card__address">
            {/* {warehouse.address}, {warehouse.city}, {warehouse.country} */}
          </p>
        </div>
        <div className="card__right">
          <h5 className="card__label">Contact Name</h5>
          <p className="card__contact-name split">{}</p>
          <h5 className="card__label">Contact Information</h5>
          <div className="card__contact-details">
            <p className="card__contact-phone">9999</p>
            <p className="card__contact-email">9999</p>
          </div>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__delete-button"></button>
        {/* <Link to={`/${warehouse.id}/edit`}> */}
        <button
          // onClick={(e) => handleSelectedProduct(warehouse)}
          className="card__edit-button"></button>
        {/* </Link> */}
      </div>
    </article>
  );
};

export default InventoryItem;
