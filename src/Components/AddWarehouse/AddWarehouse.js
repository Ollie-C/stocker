//styles
import "./AddWarehouse.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useEffect, useState } from "react";
import errorIcon from "../../assets/Icons/error-24px.svg";
var validator = require("validator");

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
  const [isSubmit, setIsSubmit] = useState(false);

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
    // console.log(data);
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
    setFormErrors(validate(warehouseDetails));
    setIsSubmit(true);
    addWarehouse();

    // if (setIsSubmit(true)) {
    //   addWarehouse();
    // alert("Success.");
    // navigate("/");
    // addWarehouse();
    // }
    // const submittedValues = Object.values(warehouseDetails);
    // const errors = submittedValues.filter((value) => {
    //   return !value;
    // });
    // if (errors.length > 0) {
    //   alert("Please fill in all fields.");
    // } else {
    // addWarehouse();
    // alert("Success.");
    // navigate("/");
    // }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(warehouseDetails);
      navigate("/");
    }
  }, [formErrors]);
  getWarehouses();

  const validate = (values) => {
    const errors = {};
    // const regex
    if (!validator.isAlpha(values.name)) {
      errors.name = "This field is required";
    }
    if (!validator.isAlphanumeric(values.address)) {
      errors.address = "This field is required";
    }
    if (!validator.isAlpha(values.city)) {
      errors.city = "This field is required";
    }
    if (!validator.isAlpha(values.country)) {
      errors.country = "This field is required";
    }
    if (!validator.isAlpha(values.contactName)) {
      errors.contactName = "This field is required";
    }
    if (!validator.isAlphanumeric(values.position)) {
      errors.position = "This field is required";
    }
    if (!validator.isAlpha(values.phone)) {
      errors.phone = "This field is required";
    }
    if (!validator.isEmail(values.email)) {
      errors.email = "This field is required";
    }

    return errors;
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
      {/* <pre>{JSON.stringify(warehouseDetails, undefined, 2)}</pre> */}
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
            <div
              style={{ display: formErrors.name ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.address ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.city ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.country ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.contactName ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.position ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
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
            <div
              style={{ display: formErrors.phone ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
            </div>
            <label htmlFor="email" className="add-form__label">
              Email
            </label>
            <input
              type="text"
              className="add-form__input"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <div
              style={{ display: formErrors.email ? "flex" : "none" }}
              className="add-form__error-container"
            >
              <img className="add-form__img" src={errorIcon} alt="" />
              <p className="add-form__error">This field is required</p>
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
