//styles
import "./AddWarehouse.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
// const validator = require("validator");

const AddWarehouse = () => {
  const navigate = useNavigate();
  const [currentDetail, setCurrentDetail] = useState("");
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
  const [formValid, setFormValid] = useState(false);

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

  //INPUT VALIDATION - tests for the TYPE of data being sent
  const isValid = (e) => {
    if (e.target.value.length === 0) {
      setFormValid(false);
      return false;
    } else {
      setFormValid(true);
      return true;
    }
  };

  //FORM VALIDATION - checks if all fields have been filled in
  const validateForm = () => {};

  const handleChange = (e) => {
    setWarehouseDetails({
      ...warehouseDetails,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(validator.isEmail(email));
    if (!formValid) {
      alert("NOPE");
    } else {
      console.log(warehouseDetails);
    }
    // addWarehouse();
    // alert("Success.");
    // navigate("/");
  };

  return (
    <main className="main">
      <section className="addWarehouse-header">
        <img
          className="addWarehouse-header__icon"
          src={backIcon}
          alt="back-button"
        />
        <h1 className="addWarehouse-header__title">Add New Warehouse</h1>
      </section>
      <form className="form" id="addWarehouseForm" onSubmit={submitHandler}>
        <div className="form-fields-wrapper">
          <div className="form__fields">
            <h2 className="form__title">Warehouse Details</h2>
            <label htmlFor="name" className="form__label">
              Warehouse Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Warehouse Name"
              name="name"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />

            <label htmlFor="address" className="form__label">
              Street Address
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Street Address"
              name="address"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
            <label htmlFor="city" className="form__label">
              City
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="City"
              name="city"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
            <label htmlFor="country" className="form__label">
              Country
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Country"
              name="country"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
          </div>
        </div>
        <div className="form-fields-wrapper">
          <div className="form__fields">
            <h2 className="form__title">Contact Details</h2>
            <label htmlFor="contactName" className="form__label">
              Contact Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Contact Name"
              name="contactName"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
            <label htmlFor="position" className="form__label">
              Position
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Position"
              name="position"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
            <label htmlFor="phone" className="form__label">
              Phone Number
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
            <label htmlFor="emai" className="form__label">
              Email
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
              onBlur={(e) => isValid(e)}
            />
          </div>
        </div>
      </form>

      <section className="form__buttons">
        <button className="form__button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          className="form__button form__button--blue"
          form="addWarehouseForm"
        >
          + Add Warehouse
        </button>
      </section>
    </main>
  );
};

export default AddWarehouse;
