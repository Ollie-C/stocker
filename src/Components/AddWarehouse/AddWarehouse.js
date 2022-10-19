//styles
import "./AddWarehouse.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
const validator = require("validator");

const AddWarehouse = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  //POST REQUEST
  const addWarehouse = async (
    e,
    name,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email
  ) => {
    e.preventDefault();
    const { data } = await axios
      .post("http://localhost:8080/warehouses", {
        name: name,
        address: address,
        city: city,
        country: country,
        contact: {
          contactName: contactName,
          position: position,
          phone: phone,
          email: email,
        },
      })
      .catch((error) => {
        alert(error.response.statusText);
        console.log(error.response);
      });
    console.log(data);
  };

  //FORM SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(validator.isEmail(email));

    addWarehouse(
      e,
      name,
      address,
      city,
      country,
      contactName,
      position,
      phone,
      email
    );
    alert("Success.");
    navigate("/");
  };

  return (
    <main className="main">
      <section className="header">
        <img className="header__icon" src={backIcon} alt="back-button" />
        <h1 className="header__title">Add New Warehouse</h1>
      </section>
      <form className="form" id="addWarehouseForm" onSubmit={submitHandler}>
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
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="address" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Street Address"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="City"
            name="city"
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
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
            onChange={(e) => setContactName(e.target.value)}
          />
          <label htmlFor="position" className="form__label">
            Position
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Position"
            name="position"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="emai" className="form__label">
            Email
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
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
