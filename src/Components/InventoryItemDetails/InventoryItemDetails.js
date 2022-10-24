import arrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./InventoryItemDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryItemDetails = () => {
  const { itemId } = useParams();
  const [inventoryItem, SetInventoryItem] = useState([]);
  const navigate = useNavigate();

  const getInventoryItem = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/inventory/${itemId}`
    );

    SetInventoryItem(data);
  };

  useEffect(() => {
    getInventoryItem();
  }, []);

  return (
    <>
      <header className="item-details__header">
        <div className="item-details__title">
          <img
            className="item-details__arrow"
            src={arrow}
            onClick={() => navigate(-1)}
            alt="back-button"
          />
          <h1 className="item-details__title-text">{inventoryItem.itemName}</h1>
        </div>
        <Link className="item-details__edit" to={`/inventory/${itemId}/edit`}>
          <img src={editWhite} className="item-details__edit-icon" />
          <p className="item-details__edit-text">Edit</p>
        </Link>
      </header>
      <section className="item-details__info">
        <div className="item-details__left">
          <div className="item-details__description">
            <h5 className="item-details__label">Item Description:</h5>
            <p className="item-details__description-text">
              {inventoryItem.description}
            </p>
          </div>
          <div className="item-details__category">
            <h5 className="item-details__label">Category:</h5>
            <p className="item-details__category-name">
              {inventoryItem.category}
            </p>
          </div>
        </div>
        <div className="item-details__right">
          <div className="item-details__stock">
            <div className="item-details__stock-info">
              <h5 className="item-details__label">Status:</h5>
              <p
                className={`item-details__status stock ${
                  inventoryItem.status === "In Stock"
                    ? "default--instock"
                    : "default--outofstock"
                }`}
              >
                {inventoryItem.status}
              </p>
            </div>
            <div className="item-details__stock-info">
              <h5 className="item-details__label">Quantity:</h5>
              <p className="item-details__quantity">{inventoryItem.quantity}</p>
            </div>
          </div>
          <div className="item-details__warehouse">
            <h5 className="item-details__label">Warehouse:</h5>
            <p className="item-details__warehouse-name">
              {inventoryItem.warehouseName}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InventoryItemDetails;
