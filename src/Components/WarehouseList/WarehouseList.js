import React from "react";
import { Link } from "react-router-dom";
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import "../WarehouseList/WarehouseList.scss";
import sort from "../../assets/Icons/sort-24px.svg";

const WarehouseList = ({
  warehouses,
  handleSelectedProduct,
  showModalHandler,
}) => {
  if (!warehouses.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="warehouse-list__header">
        <h2 className="warehouse-list__title split">Warehouses</h2>
        <div className="warehouse-list__inputs">
          <input
            className="warehouse-list__search split"
            placeholder="Search..."
          ></input>
          <Link to="/warehouses/add" className="warehouse-list__button">
            + Add New Warehouse
          </Link>
        </div>
      </header>
      <ul className="key">
        <li className="key__label">
          <p className="key__text">Warehouse</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Address</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Contact Name</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Contact Information</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Actions</p>
        </li>
      </ul>
      <ul className="List">
        {warehouses.map((warehouse) => {
          return (
            <WarehouseItem
              key={warehouse.id}
              warehouse={warehouse}
              handleSelectedProduct={handleSelectedProduct}
              showModalHandler={showModalHandler}
            />
          );
        })}
      </ul>
    </>
  );
};

export default WarehouseList;
