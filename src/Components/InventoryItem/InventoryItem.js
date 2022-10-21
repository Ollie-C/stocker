import React from "react";
import { Link } from "react-router-dom";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import "./InventoryItem.scss";

const InventoryItem = ({
  inventory,
  handleSelectedProduct,
  showModalHandler,
}) => {
  const deleteClickHandler = () => {
    handleSelectedProduct(inventory);
    showModalHandler();
  };
  return (
    <article className="card">
      <div className="card__text-wrapper">
        <div className="card__left">
          <h5 className="card__label">Inventory Item</h5>
          <Link
            // to={`/warehouses/details/${warehouse.id}`}
            className="card__name split">
            <p>{inventory.itemName}</p>
            <img className="card__chevron" src={chevron} />
          </Link>
          <h5 className="card__label">CATEGORY</h5>
          <p className="card__address">{inventory.category}</p>
        </div>
        <div className="card__right">
          <h5 className="card__label">STATUS</h5>
          <p className="card__contact-name split">{inventory.status}</p>
          <h5 className="card__label">QTY</h5>
          <p className="card__contact-phone">{inventory.quantity}</p>
          <h5 className="card__label">WAREHOUSE</h5>
          <p className="card__contact-phone">{inventory.warehouseName}</p>
          <div className="card__contact-details"></div>
        </div>
      </div>
      <div className="card__buttons">
        <button
          onClick={deleteClickHandler}
          className="card__delete-button"></button>
        <Link to={`inventory/${inventory.id}/edit`}>
          <button
            onClick={(e) => handleSelectedProduct(inventory)}
            className="card__edit-button"></button>
        </Link>
      </div>
    </article>
  );
};

export default InventoryItem;
