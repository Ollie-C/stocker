// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import "./EditWarehouse.scss";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//import validator from "validator";
const validator = require("validator");

// let mobilenumber = 1233445;
// console.log(validator.isMobilePhone(mobilenumber));
// //address the state for variables
// const state = {
//   nameError: false,
//   addressError: false,
//   cityError: false,
//   countryError: false,
//   contactNameError: false,
//   positionError: false,
//   numberError: false,
//   emailError: false,
// };

const EditWarehouse = () => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, seCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // const editWarehouse = async (
  //   e,
  //   name,
  //   address,
  //   city,
  //   country,
  //   contactName,
  //   position,
  //   phone,
  //   email
  // ) => {
  //   e.preventDefault();
  //   const { data } = await axios.put(
  //     `http://localhost:8080/warehouses/${warehouseId}`,
  //     {
  //       name: name,
  //       address: address,
  //       city: city,
  //       country: country,
  //       contact: {
  //         contactName: contactName,
  //         position: position,
  //         phone: phone,
  //         email: email,
  //       },
  //     }
  //   );
  //   console.log(data);
  // };

  // const saveHandler = (e) => {
  //   e.preventDefault();
  //   editWarehouse(
  //     e,
  //     name,
  //     address,
  //     city,
  //     country,
  //     contactName,
  //     position,
  //     phone,
  //     email
  //   );
  //   console.log("success");
  // };

  const saveHandler = (event) => {
    event.preventDefault();

    //retrieve values from the form
    const EditedWarehouseObj = {
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contactName: event.target.contactName.value,
      position: event.target.position.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
    };
    axios
      .put(
        `http://localhost:8080/warehouses/${warehouseId}`,
        EditedWarehouseObj
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <main className="main">
      <section className="header">
        <img className="header__icon" src={backIcon} alt="back-button" />
        <h1 className="header__title">Edit Warehouse</h1>
      </section>
      <form className="form" id="addWarehouseForm" onSubmit={saveHandler}>
        <div className="form__fields">
          <h2 className="form__title">Warehouse Details</h2>
          {/* <h2 className="form__title">{selectedProduct.id}</h2> */}
          <label htmlFor="name" className="form__label">
            Warehouse Name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Warehouse Name"
            name="name"
          />
          <label htmlFor="address" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Street Address"
            name="address"
          />
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="City"
            name="city"
          />
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Country"
            name="country"
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
          />
          <label htmlFor="position" className="form__label">
            Position
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Position"
            name="position"
          />
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
            name="phone"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Email"
            name="email"
          />
        </div>
      </form>
      <section className="form__buttons">
        <button className="form__button" onClick={() => navigate(-1)}>
          Cancel
        </button>
        <button
          className="form__button form__button--blue"
          form="addWarehouseForm">
          Save
        </button>
      </section>
    </main>
  );
};
export default EditWarehouse;
