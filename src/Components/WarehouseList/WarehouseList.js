import React from "react";
import { Link } from "react-router-dom";
import WarehouseItem from "../WarehouseItem/WarehouseItem";

const WarehouseList = ({ warehouses, handleSelectedProduct }) => {
  console.log(!warehouses.length);

  if (!warehouses.length) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header className="warehouse-list__header">
        <h2 className="warehouse-list__title">Warehouses</h2>
        <input className="warehouse-list__search"></input>
        <Link to="/warehouses/add">
          <button className="warehouse-list__button">
            + Add New Warehouse
          </button>
        </Link>
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
