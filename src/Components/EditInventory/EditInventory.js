import React from "react";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditInventory = () => {
  const navigate = useNavigate();
  const { itemId } = useParams();

  // const [itemName, setItemName] = useState("");
  // const [description, setDescription] = useState("");
  // const [category, setCategory] = useState("");
  // const [status, setStatus] = useState(false);
  // const [quantity, setQuantity] = useState(0);
  // const [warehouseName, setWarehouseName] = useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    category: "",
    status: 0,
    quantity: 0,
    warehouseName: "",
  });

  // Will update the correct input state, based
  // on whichever input the user changed.
  const inputChangeHandler = (e) => {
    const value = e.target.value;

    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
  };

  const editInventory = async (
    e,
    name,
    description,
    category,
    status,
    quantity,
    warehouseName
  ) => {
    e.preventDefault();
    console.log("saved button clicked");

    const { data } = await axios.put(
      `http://localhost:8080/inventory/${itemId}`,
      {
        name: e.target.name.value,
        description: e.target.description.value,
        category: e.target.category.value,
        status: e.target.status.value,
        quantity: e.target.quantity.value,
        WarehouseName: e.target.WarehouseName.value,
      }
    );
    navigate("/");
  };

  const saveHandler = (e) => {
    e.preventDefault();
    editInventory(
      e,
      formFields.itemName,
      formFields.description,
      formFields.category,
      formFields.status,
      formFields.quantity,
      formFields.warehouseName
    );
    // console.log("success");
  };

  useEffect(() => {
    // GET request to /warehouses/:warehouseId
    const getInventoryDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/inventory/${itemId}`
      );

      setFormFields({
        name: data.name,
        description: data.description,
        category: data.category,
        status: data.status,
        quantity: data.quantity,
        warehouseName: data.warehouseName,
      });
    };
    getInventoryDetails();
  }, [itemId]);

  return (
    <>
      <section className="editWarehouse-header">
        <Link className="editWarehouse-header__icon-container" to="/inventory">
          <img
            className="editWarehouse-header__icon"
            src={backIcon}
            alt="back-button"
          />
        </Link>
        <h1 className="editWarehouse-header__title">Edit Inventory Item</h1>
      </section>
      <form
        onSubmit={(e) => saveHandler(e)}
        className="form"
        id="addWarehouseForm">
        <div className="form__fields">
          <h2 className="form__title">Item Details</h2>
          <label htmlFor="name" className="form__label">
            Item Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Warehouse Name"
            name="name"
            onChange={(e) => inputChangeHandler(e)}
          />
          <label htmlFor="address" className="form__label">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className=""
            placeholder="please enter a brief item description.."
            onChange={(e) => inputChangeHandler(e)}></textarea>

          <label htmlFor="category" className="form__label">
            Category
          </label>
          <select type="text" name="category" className="form__input">
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div className="form__fields">
          <h2 className="form__title">Item Availability</h2>
          <label htmlFor="status" className="form__label">
            status
          </label>
          <div className="addInventory__availability-radio-container">
            <input
              type="radio"
              name="status"
              className="form__radio"
              value="In Stock"
            />
            <label htmlFor="position" className="form__label">
              In Stock
            </label>
            <input
              type="radio"
              name="status"
              className="form__radio"
              value="Out of Stock"
              onChange={(e) => inputChangeHandler(e)}
            />
            <label htmlFor="phone" className="form__label">
              Out of stock
            </label>
          </div>
          <label htmlFor="quantity" className="form__label">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            className="form__input form__input--quantity"
            value="In Stock"
            onChange={(e) => inputChangeHandler(e)}
          />
          <label htmlFor="phone" className="form__label">
            Warehouse
          </label>
          <select type="text" name="WarehouseName" className="form__input">
            <option value="Manhattan">Manhattan</option>
            <option value="Washington">Washington</option>
            <option value="Jersey">Jersey</option>
            <option value="Santa Monica">Santa Monica</option>
            <option value="Seattle">Seattle</option>
            <option value="Miami">Miami</option>
          </select>
        </div>
      </form>
      <section className="form__buttons">
        <button className="form__button">Cancel</button>
        <button
          onClick={() => navigate(-1)}
          className="form__button form__button--blue"
          form="addWarehouseForm">
          Save
        </button>
      </section>
    </>
  );
};

export default EditInventory;
