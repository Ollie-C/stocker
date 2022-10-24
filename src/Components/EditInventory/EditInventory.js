import React from "react";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditInventory.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditInventory = ({ getInventories }) => {
  const navigate = useNavigate();
  const { itemId } = useParams();

  const [formFields, setFormFields] = useState({
    itemName: "",
    description: "",
    category: "",
    status: "",
    quantity: "",
    warehouseName: "",
  });

  // Will update the correct input state, based
  // on whichever input the user changed.
  const inputChangeHandler = (e) => {
    console.log(e.target.name);
    const value = e.target.value;

    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
  };

  const editInventory = async (
    e,
    itemName,
    description,
    category,
    status,
    warehouseName
  ) => {
    // console.log(e);
    e.preventDefault();

    const { data } = await axios.put(
      `http://localhost:8080/inventory/${itemId}`,
      {
        itemName: itemName,
        description: description,
        category: category,
        status: status,
        warehouseName: warehouseName,
      }
    );
    console.log("saved button clicked");

    navigate("/inventory");
    console.log(data);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    editInventory(
      e,
      formFields.itemName,
      formFields.description,
      formFields.category,
      formFields.status,
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
      // console.log(data);

      setFormFields({
        itemName: data.itemName,
        description: data.description,
        category: data.category,
        status: data.status,
        warehouseName: data.warehouseName,
      });
      // console.log(data);
    };
    getInventoryDetails();
  }, [itemId]);
  getInventories();

  return (
    <>
      <section className="editWarehouse-header">
        <img
          className="editWarehouse-header__icon"
          src={backIcon}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h1 className="editWarehouse-header__title">Edit Inventory Item</h1>
      </section>
      <form
        onSubmit={(e) => saveHandler(e)}
        className="form"
        id="addWarehouseForm"
      >
        <div className="form__fields">
          <h2 className="form__title">Item Details</h2>
          <label htmlFor="name" className="form__label">
            Item Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Warehouse Name"
            name="itemName"
            value={formFields.itemName}
            onChange={(e) => inputChangeHandler(e)}
          />
          <label htmlFor="address" className="form__label">
            Description
          </label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            className="form__textarea"
            placeholder="please enter a brief item description.."
            value={formFields.description}
            onChange={(e) => inputChangeHandler(e)}
          ></textarea>

          <label htmlFor="category" className="form__label">
            Category
          </label>
          <select
            selected={formFields.category}
            onChange={(e) => inputChangeHandler(e)}
            type="text"
            name="category"
            className="form__input"
          >
            <option value={formFields.category}>{formFields.category}</option>
            <option value="Electronics">Electronics</option>
            <option value="Gear">Gear</option>
            <option value="Apparel">Apparel</option>
            <option value="Accessories">Accessories</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <div className="form__fields form__fields--active">
          <h2 className="form__title">Item Availability</h2>
          <label htmlFor="status" className="form__label">
            Status
          </label>
          <div className="addInventory__availability-radio-container">
            <input
              type="radio"
              name="status"
              className="form__radio"
              value="In Stock"
              checked={formFields.status === "In Stock"}
              onChange={(e) => inputChangeHandler(e)}
            />
            <label htmlFor="In Stock" className="form__label">
              In Stock
            </label>
            <input
              type="radio"
              name="status"
              className="form__radio"
              onChange={(e) => inputChangeHandler(e)}
              checked={formFields.status === "Out of Stock"}
              value="Out of Stock"
            />
            <label htmlFor="Out of Stock" className="form__label">
              Out of stock
            </label>
          </div>

          <label
            htmlFor="warehouseName"
            className="form__label form__label--active"
          >
            Warehouse
          </label>
          <select
            value={formFields.warehouseName}
            onChange={(e) => inputChangeHandler(e)}
            type="text"
            name="warehouseName"
            className="form__input"
          >
            <option value={formFields.warehouseName}>
              {formFields.warehouseName}
            </option>
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
          className="form__button form__button--blue"
          form="addWarehouseForm"
        >
          Save
        </button>
      </section>
    </>
  );
};

export default EditInventory;
