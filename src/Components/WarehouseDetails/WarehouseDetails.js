import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";
import "./WarehouseDetails.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";
import sort from "../../assets/Icons/sort-24px.svg";

const WarehouseDetails = ({ handleSelectedProduct, showModalHandler }) => {
  const { warehouseId } = useParams();
  const [warehouse, SetWarehouse] = useState(null);
  const [warehouseInventory, SetWarehouseInventory] = useState([]);

  const navigate = useNavigate();

  const getWarehouse = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/warehouses/${warehouseId}`
    );
    SetWarehouse(data);
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  const getWarehouseInventory = async () => {
    const inventory = await axios.get(
      `http://localhost:8080/warehouses/${warehouseId}/inventory`
    );
    SetWarehouseInventory(inventory.data);
  };

  useEffect(() => {
    getWarehouseInventory();
  }, [warehouseId]);

  if (!warehouse) {
    return <h1>FML</h1>;
  }

  return (
    <div className="WH-details">
      <header className="WH-details__header">
        <div className="WH-details__title">
          <img
            className="WH-details__arrow"
            src={arrow}
            onClick={() => navigate(-1)}
          />

          <h1 className="WH-details__title-text">{warehouse.name}</h1>
        </div>
        <Link
          className="WH-details__edit"
          to={`/warehouses/${warehouse.id}/edit`}
        >
          <img src={editWhite} className="WH-details__edit-icon" />
          <p className="WH-details__edit-text">Edit</p>
        </Link>
      </header>
      <section className="WH-details__contact">
        <div className="WH-details__address">
          <h5 className="WH-details__label">Warehouse Address:</h5>
          <p className="WH-details__address-text">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="WH-details__contact-wrapper split">
          <div className="WH-details__name">
            <h5 className="WH-details__label">Contact Name:</h5>
            <p className="WH-details__contact-name">{warehouse.contact.name}</p>
            <p className="WH-details__contact-position">
              {warehouse.contact.position}
            </p>
          </div>
          <div className="WH-details__contact-info">
            <h5 className="WH-details__label">Contact Name:</h5>
            <p className="WH-details__contact-phone">
              {warehouse.contact.phone}
            </p>
            <p className="WH-details__contact-email">
              {warehouse.contact.email}
            </p>
          </div>
        </div>
      </section>
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
          <p className="key__text">Quantity</p>
          <img src={sort} alt="sort" className="key__sort" />
        </li>
        <li className="key__label key__label--actions">
          <p className="key__text">Actions</p>
        </li>
      </ul>
      <ul className="WH-inventory">
        {warehouseInventory.map((inventoryItem) => {
          return (
            <WarehouseInventoryItem
              key={inventoryItem.id}
              inventoryItem={inventoryItem}
              handleSelectedProduct={handleSelectedProduct}
              showModalHandler={showModalHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WarehouseDetails;
