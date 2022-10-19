import React from "react";
import { NavLink } from "react-router-dom";
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import "../WarehouseList/WarehouseList.scss";

const WarehouseList = ({ warehouses, handleSelectedProduct }) => {
  console.log(!warehouses.length);

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
          <button className="warehouse-list__button split">
            + Add New Warehouse
          </button>
        </div>
      </header>
      <section>
        <ul className="List">
          {warehouses.map((warehouse) => {
            return (
              <WarehouseItem
                key={warehouse.id}
                warehouse={warehouse}
                handleSelectedProduct={handleSelectedProduct}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default WarehouseList;
