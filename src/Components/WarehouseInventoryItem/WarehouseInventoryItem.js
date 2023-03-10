import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import "./WarehouseInventoryItem.scss";
import editbutton from "../../assets/Icons/edit-24px.svg";

const WarehouseInventoryItem = ({
  inventoryItem,
  handleSelectedProduct,
  showModalHandler,
}) => {
  const inventoryItemId = inventoryItem.id;
  const deleteClickHandler = () => {
    handleSelectedProduct(inventoryItem);
    showModalHandler();
  };
  return (
    <>
      <article className="card">
        <div className="card__text-wrapper">
          <div className="card__left">
            <h5 className="card__label">Inventory Item</h5>
            <Link
              to={`/inventory/${inventoryItemId}`}
              className="card__name split"
            >
              <p>{inventoryItem.itemName}</p>
              <img className="card__chevron" src={chevron} />
            </Link>
            <h5 className="card__label">Category</h5>
            <p className="card__address">{inventoryItem.category}</p>
          </div>
          <div className="card__right">
            <h5 className="card__label">Status</h5>
            <article className="card__contact-name split">
              <p
                className={` stock ${
                  inventoryItem.status === "In Stock"
                    ? "default--instock"
                    : "default--outofstock"
                }`}
              >
                {inventoryItem.status}
              </p>
            </article>
            <h5 className="card__label">Quantity</h5>
            <div className="card__contact-details">
              <p className="card__contact-phone">{inventoryItem.quantity}</p>
            </div>
          </div>
        </div>
        <div className="card__buttons">
          <button
            className="card__delete-button"
            onClick={deleteClickHandler}
          ></button>
          <Link to={`/inventory/${inventoryItemId}/edit`}>
            <div className="card__edit-button">
              <img className="card__edit-img" src={editbutton} />
            </div>
          </Link>
        </div>
      </article>
    </>
  );
};

export default WarehouseInventoryItem;
