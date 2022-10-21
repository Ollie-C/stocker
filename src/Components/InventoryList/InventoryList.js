import React from "react";
import sort from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryList = ({
  inventories,
  handleSelectedProduct,
  showModalHandler,
}) => {
  // console.log(inventories);
  // if (inventories.length) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <header className="warehouse-list__header">
        <h2 className="warehouse-list__title split">Inventories</h2>
        <div className="warehouse-list__inputs">
          <input
            className="warehouse-list__search split"
            placeholder="Search..."
          ></input>
          <Link to="/inventory/add" className="warehouse-list__button">
            + Add New Item
          </Link>
        </div>
      </header>
      <ul className="key">
        <li className="key__label">
          <p className="key__text">Inventory Item</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Category</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Status</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">QTY</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Warehouse</p>
        </li>
        <li className="key__label">
          <p className="key__text">ACTIONS</p>
        </li>
      </ul>
      <ul className="List">
        {inventories.map((inventory) => {
          return (
            <InventoryItem
              key={inventory.id}
              inventory={inventory}
              handleSelectedProduct={handleSelectedProduct}
              showModalHandler={showModalHandler}
            />
          );
        })}
      </ul>
    </>
  );
};

export default InventoryList;
