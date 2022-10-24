import React from "react";
import { Link } from "react-router-dom";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import editbutton from "../../assets/Icons/edit-24px.svg";
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
    <article className="inventory">
      <div className="inventory__text-wrapper">
        <div className="inventory__left">
          <h5 className="inventory__label">Inventory Item</h5>
          <Link
            to={`/inventory/${inventory.id}`}
            className="inventory__name split">
            <p>{inventory.itemName}</p>
            <img className="inventory__chevron" src={chevron} />
          </Link>
          <h5 className="inventory__label">CATEGORY</h5>
          <p className="inventory__address">{inventory.category}</p>
        </div>
        <div className="inventory__right">
          <h5 className="inventory__label">STATUS</h5>
          <div className="inventory__contact-name split ">
            <p
              className={`stock ${
                inventory.status === "In Stock"
                  ? "default--instock"
                  : "default--outofstock"
              }`}>
              {inventory.status}
            </p>
          </div>
          <h5 className="inventory__label">QTY</h5>
          <p className="inventory__contact-phone split">{inventory.quantity}</p>
          <div className="inventory__contact-details"></div>
          <h5 className="inventory__label">WAREHOUSE</h5>
          <p className="inventory__contact-phone">{inventory.warehouseName}</p>
        </div>
      </div>
      <div className="inventory__buttons">
        <button
          onClick={deleteClickHandler}
          className="inventory__delete-button"></button>
        <Link to={`${inventory.id}/edit`}>
          <div
            className="card__edit-button"
            onClick={(e) => handleSelectedProduct(inventory)}>
            <img className="card__edit-img" src={editbutton} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default InventoryItem;
