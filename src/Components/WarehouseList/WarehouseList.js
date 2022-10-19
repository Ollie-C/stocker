import React from "react";
import { NavLink } from "react-router-dom";
import WarehouseItem from "../WarehouseItem/WarehouseItem";

const WarehouseList = (props) => {
  return (
    <>
      <header className="warehouse-list__header">
        <h2 className="warehouse-list__title">Warehouses</h2>
        <input className="warehouse-list__search"></input>
        <button className="warehouse-list__button">+ Add New Warehouse</button>
      </header>
      <section>
        <ul className="List">
          {props.warehouses.map((warehouse) => {
            return <WarehouseItem key={warehouse.id} warehouse={warehouse} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default WarehouseList;
