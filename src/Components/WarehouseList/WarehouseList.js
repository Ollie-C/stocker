import React from "react";
import { Link } from "react-router-dom";
import WarehouseItem from "../WarehouseItem/WarehouseItem";
import "../WarehouseList/WarehouseList.scss";
import sort from "../../assets/Icons/sort-24px.svg";

const WarehouseList = ({
  warehouses,
  handleSelectedProduct,
  showModalHandler,
  handleChange,
  sorting,
  search,
  setSearch,
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
            onChange={(e) => setSearch(e.target.value)}
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
          <img
            onClick={() => sorting("name")}
            src={sort}
            alt="sort"
            className="key__sort"
          />
        </li>
        <li className="key__label">
          <p className="key__text">Address</p>
          <img
            onClick={() => sorting("address")}
            src={sort}
            alt="sort"
            className="key__sort"
          />
        </li>
        <li className="key__label">
          <p className="key__text">Contact Name</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label">
          <p className="key__text">Contact Information</p>
          <img
            onClick={() => sorting("contact")}
            src={sort}
            alt="sort"
            className="key__sort"
          />
        </li>
        <li className="key__label">
          <p className="key__text">Actions</p>
        </li>
      </ul>
      <ul className="List">
        {warehouses
          .filter((warehouse) => {
            return search.toLowerCase() === ""
              ? warehouse
              : warehouse.name.toLowerCase().includes(search) ||
                  warehouse.address.toLowerCase().includes(search) ||
                  warehouse.city.toLowerCase().includes(search) ||
                  warehouse.country.toLowerCase().includes(search) ||
                  warehouse.contact.name.toLowerCase().includes(search) ||
                  warehouse.contact.email.toLowerCase().includes(search) ||
                  warehouse.contact.phone.toLowerCase().includes(search);
          })
          .map((warehouse) => {
            return (
              <WarehouseItem
                key={warehouse.id}
                warehouse={warehouse}
                handleSelectedProduct={handleSelectedProduct}
                showModalHandler={showModalHandler}
                sorting={sorting}
              />
            );
          })}
      </ul>
    </>
  );
};

export default WarehouseList;
