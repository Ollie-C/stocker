//styles
import "./AddInventoryItem.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
// const validator = require("validator");

const AddInventoryItem = ({ warehouses }) => {
  const navigate = useNavigate();
  const [itemDetails, setItemDetails] = useState({
    warehouseName: "Jersey",
    itemName: "",
    description: "",
    category: "Accessories",
    stock: "",
    quantity: "0",
  });
  const [stock, setStock] = useState("In Stock");

  const addItem = async () => {
    // console.log(warehouses);
    // const warehouse = warehouses.find(
    //   (warehouse) => warehouse.name === itemDetails.warehouseName
    // );
    // console.log(warehouse);
    const { data } = await axios
      .post("http://localhost:8080/inventory", {
        // warehouseID: warehouse.id,
        warehouseName: itemDetails.warehouseName,
        itemName: itemDetails.itemName,
        description: itemDetails.description,
        category: itemDetails.category,
        status: itemDetails.stock,
        quantity: parseInt(itemDetails.quantity),
      })
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    console.log(data);
  };

  const handleChange = (e) => {
    if (e.target.value === "In stock") {
      setStock("In stock");
    }
    if (e.target.value === "Out of stock") {
      setStock("Out of stock");
    }

    setItemDetails({
      ...itemDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //Loops through the value submitted in the form
    const submittedValues = Object.values(itemDetails);
    //Finds empty values
    const errors = submittedValues.filter((value) => {
      return !value;
    });
    if (errors.length > 0) {
      alert("Please fill in all fields.");
    } else {
      addItem();
      alert("Success.");
      navigate("/");
    }
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
      <form className="form" id="addInventoryItemForm" onSubmit={submitHandler}>
        <div className="form-fields-wrapper">
          <div className="form__fields">
            <h2 className="form__title">Item Details</h2>
            <label htmlFor="itemName" className="form__label">
              Item Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Item Name"
              name="itemName"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="description" className="form__label">
              Description
            </label>
            <textarea
              className="form__textarea"
              placeholder="Please enter a brief item description..."
              name="description"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <label htmlFor="category" className="form__label">
              Category
            </label>
            <select
              name="category"
              className="form__input form__input--dropdown"
              onChange={(e) => handleChange(e)}
            >
              <option defaultValue="Accessories" value="Accessories">
                Accessories
              </option>
              <option value="Apparel">Apparel</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>
        <div className="form-fields-wrapper">
          <div className="form__fields">
            <h2 className="form__title">Item Availability</h2>
            <label className="form__label">Status</label>
            <div className="form__radio-buttons">
              <input
                type="radio"
                name="stock"
                value="In Stock"
                onClick={(e) => handleChange(e)}
              />
              <label className="form__label--radio">In Stock</label>
              <input
                type="radio"
                name="stock"
                value="Out of Stock"
                onClick={(e) => handleChange(e)}
              />
              <label className="form__label--radio">Out of stock</label>
            </div>
            {stock === "In Stock" ? (
              <>
                <label htmlFor="quantity" className="form__label">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="form__input form__input--quantity"
                  defaultValue="0"
                  onChange={(e) => handleChange(e)}
                ></input>
              </>
            ) : (
              <></>
            )}

            <label htmlFor="warehouseName" className="form__label">
              Warehouse
            </label>
            <select
              name="warehouseName"
              className="form__input form__input--dropdown"
              onChange={(e) => handleChange(e)}
            >
              <option value="Jersey">Jersey</option>
              <option value="Manhattan">Manhattan</option>
              <option value="San Fran">San Fran</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Washington">Washington</option>
            </select>
          </div>
        </div>
      </form>

      <section className="form__buttons">
        <button className="form__button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          className="form__button form__button--blue"
          form="addInventoryItemForm"
        >
          + Add Item
        </button>
      </section>
    </main>
  );
};

export default AddInventoryItem;
