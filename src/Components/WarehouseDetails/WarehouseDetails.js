import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import arrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./WarehouseDetails.scss";

const WarehouseDetails = () => {
  const { warehouseId } = useParams();

  const [warehouse, SetWarehouse] = useState([]);

  const getWarehouse = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/warehouses/${warehouseId}`
    );
    SetWarehouse(data);
  };

  useEffect(() => {
    getWarehouse();
  }, []);

  return (
    <div className="WH-details">
      <header className="WH-details__header">
        <div className="WH-details__title">
          <img className="WH-details__arrow" src={arrow} />
          <h2 className="WH-details__title-text">{warehouse.name}</h2>
        </div>
        <div className="WH-details__edit">
          <img src={edit} className="WH-details__edit-icon" />
          <p className="WH-detils__edit-text">Edit</p>
        </div>
      </header>
    </div>
  );
};

export default WarehouseDetails;
