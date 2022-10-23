import "./AddWarehouse.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import errorIcon from "../../assets/Icons/error-24px.svg";
const validator = require("validator");

const AddWarehouse = ({ getWarehouses }) => {
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

  const [formErrors, setFormErrors] = useState({});

  const addWarehouse = async () => {
    const { data } = await axios
      .post("http://localhost:8080/warehouses", warehouseDetails)
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    getWarehouses();
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
    // const submittedValues = Object.values(warehouseDetails);
    // console.log(submittedValues);
    // if (submittedValues.length < 8) {
    //   console.log("no");
    // }

    // addWarehouse();
    // navigate("/");
  };

  const isValidInput = (e) => {
    const { name, value } = e.target;
    let error = null;
    if (!validator.isAlphanumeric(value, "en-GB", { ignore: " " })) {
      error = "Only letters and numbers can be used";
    }
    if (validator.isEmpty(value)) {
      error = "This field is required";
    }
    setFormErrors({
      ...formErrors,
      [name]: error ? error : null,
    });
  };

  const isValidPhone = (e) => {
    const { name, value } = e.target;
    let error = null;
    if (!validator.isMobilePhone(value) || validator.isEmpty(value)) {
      error = "Please enter a valid phone number";
    }
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const isValidEmail = (e) => {
    const { name, value } = e.target;
    let error = null;
    if (!validator.isEmail(value) || validator.isEmpty(value)) {
      error = "Please enter a valid email address";
    }
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
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
            <div className="input-wrapper">
              <label htmlFor="name" className="add-form__label">
                Warehouse Name
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Warehouse Name"
                name="name"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.name ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.name}</p>
              </div>
            </div>

            <div className="input-wrapper">
              <label htmlFor="address" className="add-form__label">
                Street Address
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Street Address"
                name="address"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.address ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.address}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="city" className="add-form__label">
                City
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="City"
                name="city"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.city ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.city}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="country" className="add-form__label">
                Country
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Country"
                name="country"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.country ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.country}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form-fields-wrapper">
          <div className="add-form__fields">
            <h2 className="add-form__title">Contact Details</h2>
            <div className="input-wrapper">
              <label htmlFor="contactName" className="add-form__label">
                Contact Name
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Contact Name"
                name="contactName"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.contactName ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.contactName}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="position" className="add-form__label">
                Position
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Position"
                name="position"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidInput(e)}
              />
              <div
                style={{ display: formErrors.position ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.position}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="phone" className="add-form__label">
                Phone Number
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Phone Number"
                name="phone"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidPhone(e)}
              />
              <div
                style={{ display: formErrors.phone ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img className="add-form__icon" src={errorIcon} alt="" />
                <p className="add-form__error">{formErrors.phone}</p>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="email" className="add-form__label">
                Email
              </label>
              <input
                type="text"
                className="add-form__input"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => isValidEmail(e)}
              />
              <div
                style={{ display: formErrors.email ? "flex" : "none" }}
                className="add-form__error-container"
              >
                <img
                  className="add-form__icon"
                  src={errorIcon}
                  alt="error-icon"
                />
                <p className="add-form__error">{formErrors.email}</p>
              </div>
            </div>
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
