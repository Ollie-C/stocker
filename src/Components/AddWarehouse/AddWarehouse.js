//styles
import "./AddWarehouse.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
// const validator = require("validator");

const AddWarehouse = () => {
  const navigate = useNavigate();
  const [warehouseDetails, setWarehouseDetails] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phone: "",
    email: "",
  });

  const addWarehouse = async () => {
    const { data } = await axios
      .post("http://localhost:8080/warehouses", {
        name: warehouseDetails.name,
        address: warehouseDetails.address,
        city: warehouseDetails.city,
        country: warehouseDetails.country,
        contact: {
          contactName: warehouseDetails.contactName,
          position: warehouseDetails.position,
          phone: warehouseDetails.phone,
          email: warehouseDetails.email,
        },
      })
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    console.log(data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWarehouseDetails({
      ...warehouseDetails,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submittedValues = Object.values(warehouseDetails);
    const errors = submittedValues.filter((value) => {
      return !value;
    });
    if (errors.length > 0) {
      alert("Please fill in all fields.");
    } else {
      addWarehouse();
      alert("Success.");
      navigate("/");
    }
  };

  return (
    <main className="main">
      <section className="addWarehouse-header">
        <img
          className="addWarehouse-header__icon"
          src={backIcon}
          alt="back-button"
          onClick={() => navigate(-1)}
        />
        <h1 className="addWarehouse-header__title">Add New Warehouse</h1>
      </section>
      <form className="add-form" id="addWarehouseForm" onSubmit={submitHandler}>
        <div className="form-fields-wrapper">
          <div className="add-form__fields">
            <h2 className="add-form__title">Warehouse Details</h2>
            <label htmlFor="name" className="add-form__label">
              Warehouse Name
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Warehouse Name"
              name="name"
              onChange={(e) => handleChange(e)}
            />

            <label htmlFor="address" className="add-form__label">
              Street Address
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Street Address"
              name="address"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="city" className="add-form__label">
              City
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="City"
              name="city"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="country" className="add-form__label">
              Country
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Country"
              name="country"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="form-fields-wrapper">
          <div className="add-form__fields">
            <h2 className="add-form__title">Contact Details</h2>
            <label htmlFor="contactName" className="add-form__label">
              Contact Name
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Contact Name"
              name="contactName"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="position" className="add-form__label">
              Position
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Position"
              name="position"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="phone" className="add-form__label">
              Phone Number
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="emai" className="add-form__label">
              Email
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
      </form>

      <section className="add-form__buttons">
        <button className="add-form__button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          className="add-form__button add-form__button--blue"
          form="addWarehouseForm"
        >
          + Add Warehouse
        </button>
      </section>
    </main>
  );
};

export default AddWarehouse;
