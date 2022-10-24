import arrow from "../../assets/Icons/arrow_back-24px.svg";
import editWhite from "../../assets/Icons/edit-24px-white.svg";
import { Link } from "react-router-dom";
import "./InventoryItemDetails.scss";

const InventoryItemDetails = () => {
  return (
    <>
      <header className="item-details__header">
        <div className="item-details__title">
          <Link to="/">
            <img className="item-details__arrow" src={arrow} />
          </Link>
          <h1 className="item-details__title-text">Television</h1>
        </div>
        <div className="item-details__edit">
          <img src={editWhite} className="item-details__edit-icon" />
          <p className="item-details__edit-text">Edit</p>
        </div>
      </header>
      <section className="item-details__info">
        <div className="item-details__left">
          <div className="item-details__description">
            <h5 className="item-details__label">Item Description:</h5>
            <p className="item-details__description-text">
              This 50",4K LED TV provides a crystal-clear pciture and vivid
              colors.
            </p>
          </div>
          <div className="item-details__category">
            <h5 className="item-details__label">Category:</h5>
            <p className="item-details__category-name">Electronics</p>
          </div>
        </div>
        <div className="item-details__right">
          <div className="item-details__stock">
            <div className="item-details__stock-info">
              <div>
                <h5 className="item-details__label">Status:</h5>
                <p className="item-details__status">In Stock</p>
              </div>
              <div>
                <h5 className="item-details__label">Quantity:</h5>
                <p className="item-details__quantity">500</p>
              </div>
            </div>
          </div>
          <div className="item-details__warehouse">
            <h5 className="item-details__label">Warehouse:</h5>
            <p className="item-details__warehouse-name">Manhattan</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InventoryItemDetails;
