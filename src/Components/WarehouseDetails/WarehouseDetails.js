import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./WarehouseDetails.scss";
import WarehouseInventoryItem from "../WarehouseInventoryItem/WarehouseInventoryItem";

const WarehouseDetails = () => {
  const { warehouseId } = useParams();

  const [warehouse, SetWarehouse] = useState(null);

  const [warehouseInventory, SetWarehouseInventory] = useState([]);

  const getWarehouse = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/warehouses/${warehouseId}`
    );
    console.log(data);
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
    console.log(inventory.data);
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
          <img className="WH-details__arrow" src={arrow} />
          <h1 className="WH-details__title-text">{warehouse.name}</h1>
        </div>
        <div className="WH-details__edit">
          <img src={edit} className="WH-details__edit-icon" />
          <p className="WH-details__edit-text">Edit</p>
        </div>
      </header>
      <section className="WH-details__contact">
        <div className="WH-details__address">
          <h5 className="WH-details__label">Warehouse Address:</h5>
          <p className="WH-details__address-text">
            {warehouse.address}, {warehouse.city}, {warehouse.country}
          </p>
        </div>
        <div className="WH-details__contact-wrapper">
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
      <ul className="WH-inventory">
        {warehouseInventory.map((inventoryItem) => {
          return (
            <WarehouseInventoryItem
              key={inventoryItem.id}
              inventoryItem={inventoryItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default WarehouseDetails;
