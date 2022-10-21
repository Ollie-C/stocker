import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

const WarehouseInventoryItem = ({ inventoryItem }) => {
  return (
    <>
      <article className="card">
        <div className="card__text-wrapper">
          <div className="card__left">
            <h5 className="card__label">Warehouse</h5>
            <Link to={`/`} className="card__name split">
              <p>{inventoryItem.itemName}</p>
              <img className="card__chevron" src={chevron} />
            </Link>
            <h5 className="card__label">Category</h5>
            <p className="card__address">{inventoryItem.category}</p>
          </div>
          <div className="card__right">
            <h5 className="card__label">Status</h5>
            <p className="card__contact-name split">{inventoryItem.status}</p>
            <h5 className="card__label">Quantity</h5>
            <div className="card__contact-details">
              <p className="card__contact-phone">{inventoryItem.quantity}</p>
            </div>
          </div>
        </div>
        <div className="card__buttons">
          <button className="card__delete-button"></button>
          <Link to={`/`}>
            <button className="card__edit-button"></button>
          </Link>
        </div>
      </article>
    </>
  );
};

export default WarehouseInventoryItem;
