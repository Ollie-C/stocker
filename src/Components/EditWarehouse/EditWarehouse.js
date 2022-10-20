// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import errorIcon from "../../assets/Icons/error-24px.svg";
import "./EditWarehouse.scss";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditWarehouse = () => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();
  const [showMessage, setShowMessage] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // const nameUpdated = (e) => {
  //   const value = e.target;
  //   setName({ name: value });
  // };

  // const addressUpdated = (e) => {
  //   const value = e.target;
  //   setAddress({ address: value });
  // };
  // const cityUpdated = (e) => {
  //   const value = e.target;
  //   setCity({ city: value });
  // };
  // const countryUpdated = (e) => {
  //   const value = e.target;
  //   setCountry({ country: value });
  // };

  // const contactNameUpdated = (e) => {
  //   const value = e.target;
  //   setContactName({ contactName: value });
  // };

  // const positionUpdated = (e) => {
  //   const value = e.target;
  //   setPosition({ position: value });
  // };

  // const phoneUpdated = (e) => {
  //   const value = e.target;
  //   setPhone({ number: value });
  // };

  // const emailUpdated = (e) => {
  //   const { value } = e.target;
  //   setEmail({ email: value });
  // };

  //method 1
  const editWarehouse = async (
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

    console.log("saved button clicked");

    if (name.trim("") === "" && address.trim("")) {
      return;
    }

    const { data } = await axios.put(
      `http://localhost:8080/warehouses/${warehouseId}`,
      {
        name: e.target.name.value,
        address: e.target.address.value,
        city: e.target.city.value,
        country: e.target.country.value,
        contact: {
          contactName: e.target.contactName.value,
          position: e.target.position.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
        },
      }
    );
    setShowMessage(true);

    setTimeout(() => {
      navigate("/");
    }, 1500);

    console.log("2", data);
    // setName(name);
    // setAddress(address);
    // setCity(city);
    // setCountry(country);
    // setContactName(contactName);
    // setPosition(position);
    // setPhone(phone);
    // setEmail(email);
  };

  const saveHandler = (e) => {
    e.preventDefault();
    editWarehouse(
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
    // console.log("success");
  };

  //////////////////////////////////////////////method 2
  // const saveHandler = (event) => {
  //   event.preventDefault();

  //   //retrieve values from the form
  //   const EditedWarehouseObj = {
  //     name: event.target.name.value,
  //     address: event.target.address.value,
  //     city: event.target.city.value,
  //     country: event.target.country.value,
  //     contactName: event.target.contactName.value,
  //     position: event.target.position.value,
  //     phone: event.target.phone.value,
  //     email: event.target.email.value,
  //   };
  //   axios
  //     .put(
  //       `http://localhost:8080/warehouses/${warehouseId}`,
  //       EditedWarehouseObj
  //     )
  //     .then((response) => {
  //       console.log(response);
  //     });
  // };

  return (
    <main className="main">
      <section className="header">
        <img className="header__icon" src={backIcon} alt="back-button" />
        <h1 className="header__title">Edit Warehouse</h1>
      </section>
      <form
        className="form"
        id="addWarehouseForm"
        onSubmit={(e) => saveHandler(e)}>
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
            // onInput="hello"
          />
          <label htmlFor="address" className="form__label">
            Street Address
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Street Address"
            name="address"
            // onInput="addressUpdated"
          />
          <label htmlFor="city" className="form__label">
            City
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="City"
            name="city"
            // onInput="cityUpdated"
          />
          <label htmlFor="country" className="form__label">
            Country
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Country"
            name="country"
            // onInput="countryUpdated"
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
            // onInput="contactNameUpdated"
          />
          <label htmlFor="position" className="form__label">
            Position
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Position"
            name="position"
            // onInput="positionUpdated"
          />
          <label htmlFor="phone" className="form__label">
            Phone Number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Phone Number"
            name="phone"
            // onInput="phoneUpdated"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="Email"
            name="email"
            // onInput="emailUpdated"
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
