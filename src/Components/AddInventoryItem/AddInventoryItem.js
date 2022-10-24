import "./AddInventoryItem.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import { useState } from "react";
import {
  isEmpty,
  isNotAlphanumeric,
  isInvalidPhone,
  isInvalidEmail,
} from "../../utils/Helpers.js";

const AddInventoryItem = ({ warehouses, getInventories }) => {
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState({
    warehouseName: null,
    itemName: "",
    description: "",
    category: null,
    quantity: "0",
  });
  const [stock, setStock] = useState(true);
  const [formErrors, setFormErrors] = useState({});

  const addItem = async () => {
    const { data } = await axios
      .post("http://localhost:8080/inventory", itemDetails)
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    getInventories();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setItemDetails({
      ...itemDetails,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submittedValues = Object.values(itemDetails);
    const errors = submittedValues.filter((value) => {
      return !value;
    });
    if (errors.length > 0) {
      alert("Please fill in all fields.");
      return false;
    } else {
      addItem();
      navigate("/inventory");
    }
  };

  const isValidInput = (e, type) => {
    const { name, value } = e.target;
    let error = null;

    if (type === "regular") {
      error = isNotAlphanumeric(value);
    }

    if (isEmpty(value)) {
      error = isEmpty(value);
    }
    console.log(value);

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  return (
    <main className="main">
      <section className="addInventoryItem-header">
        <img
          className="addInventoryItem-header__icon"
          src={backIcon}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h1 className="addInventoryItem-header__title">
          Add New Inventory Item
        </h1>
      </section>
      <form
        className="addI-form"
        id="addInventoryItemForm"
        onSubmit={submitHandler}
      >
        <div className="form-fields-wrapper">
          <div className="addI-form__fields">
            <h2 className="addI-form__title">Item Details</h2>
            <div className="input-wrapper">
              <label htmlFor="itemName" className="addI-form__label">
                Item Name
              </label>
              <input
                type="text"
                className="addI-form__input"
                placeholder="Item Name"
                name="itemName"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e, "regular")}
                style={{
                  outline: formErrors.itemName ? "1px solid #c94515" : "",
                }}
              />
              <div
                style={{ display: formErrors.itemName ? "flex" : "none" }}
                className="addI-form__error-container"
              >
                <img
                  className="addI-form__icon"
                  src={errorIcon}
                  alt="error-icon"
                />
                <p className="addI-form__error">{formErrors.itemName}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="description" className="addI-form__label">
                Description
              </label>
              <textarea
                className="addI-form__textarea"
                placeholder="Please enter a brief item description..."
                name="description"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e, "regular")}
                style={{
                  outline: formErrors.description ? "1px solid #c94515" : "",
                }}
              ></textarea>
              <div
                style={{ display: formErrors.description ? "flex" : "none" }}
                className="addI-form__error-container"
              >
                <img
                  className="addI-form__icon"
                  src={errorIcon}
                  alt="error-icon"
                />
                <p className="addI-form__error">{formErrors.description}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="category" className="addI-form__label">
                Category
              </label>
              <select
                name="category"
                className="addI-form__input addI-form__input--dropdown"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e, "none")}
                style={{
                  outline: formErrors.category ? "1px solid #c94515" : "",
                }}
              >
                <option value="">Please select</option>
                <option value="Accessories">Accessories</option>
                <option value="Apparel">Apparel</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Health">Health</option>
              </select>
              <div
                style={{ display: formErrors.category ? "flex" : "none" }}
                className="addI-form__error-container"
              >
                <img
                  className="addI-form__icon"
                  src={errorIcon}
                  alt="error-icon"
                />
                <p className="addI-form__error">{formErrors.category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-fields-wrapper">
          <div className="addI-form__fields">
            <h2 className="addI-form__title">Item Availability</h2>
            <div className="input-wrapper">
              <label className="addI-form__label">Status</label>
              <div className="addI-form__radio-buttons">
                <input
                  type="radio"
                  name="status"
                  value="In Stock"
                  onClick={() => setStock(true)}
                />
                <label
                  className="addI-form__label--radio"
                  style={{
                    color: !stock ? "#5c667e" : "",
                  }}
                >
                  In Stock
                </label>
                <input
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  onClick={() => setStock(false)}
                />
                <label
                  className="addI-form__label--radio"
                  style={{
                    color: stock ? "#5c667e" : "",
                  }}
                >
                  Out of stock
                </label>
              </div>
            </div>
            <div className="input-wrapper">
              {stock ? (
                <>
                  <label htmlFor="quantity" className="addI-form__label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    className="addI-form__input addI-form__input--quantity"
                    defaultValue="0"
                    onChange={(e) => handleChange(e)}
                  ></input>
                </>
              ) : (
                <></>
              )}
            </div>

            <div className="input-wrapper">
              <label htmlFor="warehouseName" className="addI-form__label">
                Warehouse
              </label>
              <select
                name="warehouseName"
                className="addI-form__input addI-form__input--dropdown"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e, "none")}
                style={{
                  outline: formErrors.warehouseName ? "1px solid #c94515" : "",
                }}
              >
                <option value="">Please select</option>
                {warehouses.map((warehouse) => {
                  return (
                    <option key={warehouse.id} value={warehouse.name}>
                      {warehouse.name}
                    </option>
                  );
                })}
              </select>
              <div
                style={{ display: formErrors.warehouseName ? "flex" : "none" }}
                className="addI-form__error-container"
              >
                <img
                  className="addI-form__icon"
                  src={errorIcon}
                  alt="error-icon"
                />
                <p className="addI-form__error">{formErrors.warehouseName}</p>
              </div>
            </div>
          </div>
        </div>
      </form>

      <section className="addI-form__buttons">
        <button className="addI-form__button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          className="addI-form__button addI-form__button--blue"
          form="addInventoryItemForm"
        >
          + Add Item
        </button>
      </section>
    </main>
  );
};

export default AddInventoryItem;
