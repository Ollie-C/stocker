import React from "react";
import sort from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import "./InventoryList.scss";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryList = ({
  inventories,
  handleSelectedProduct,
  showModalHandler,
  sortInventory,
  search,
  setSearch,
}) => {
  const keys = ["warehouseName", "description", "category", "status"];

  return (
    <>
      <header className="warehouse-list__header">
        <h2 className="warehouse-list__title split">Inventories</h2>
        <div className="warehouse-list__inputs">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="warehouse-list__search split"
            placeholder="Search..."
          ></input>
          <Link to="/inventory/add" className="warehouse-list__button">
            + Add New Item
          </Link>
        </div>
      </header>
      <ul className="key-inventory">
        <li className="key-inventory__label">
          <p className="key-inventory__text">Inventory Item</p>
          <img
            onClick={() => sortInventory("itemName")}
            src={sort}
            alt="sort"
            className="key-inventory__sort"
          />
        </li>
        <li className="key-inventory__label">
          <p className="key-inventory__text">Category</p>
          <img
            onClick={() => sortInventory("category")}
            src={sort}
            alt="sort"
            className="key-inventory__sort"
          />
        </li>
        <li className="key-inventory__label">
          <p className="key-inventory__text">Status</p>
          <img
            onClick={() => sortInventory("status")}
            src={sort}
            alt="sort"
            className="key-inventory__sort"
          />
        </li>
        <li className="key-inventory__label">
          <p className="key-inventory__text">QTY</p>
          <img
            onClick={() => sortInventory("quantity")}
            src={sort}
            alt="sort"
            className="key-inventory__sort"
          />
        </li>
        <li className="key-inventory__label">
          <p className="key-inventory__text">Warehouse</p>
        </li>
        <li className="key-inventory__label key-inventory__label--actions">
          <p className="key-inventory__text">ACTIONS</p>
        </li>
      </ul>
      <ul className="List">
        {inventories
          .filter((inventory) => {
            return search.toLowerCase() === ""
              ? inventory
              : inventory.itemName.toLowerCase().includes(search) ||
                  inventory.category.toLowerCase().includes(search) ||
                  inventory.status.toLowerCase().includes(search) ||
                  inventory.warehouseName.toLowerCase().includes(search);
          })
          .map((inventory) => {
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
