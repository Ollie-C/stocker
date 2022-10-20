//styles
import "./AddInventoryItem.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import { useState } from "react";
// const validator = require("validator");

const AddInventoryItem = () => {
  const navigate = useNavigate();
  const [stock, setStock] = useState("In Stock");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [error, setError] = useState(false);

  const addInventoryItem = async (
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

  //FORM VALIDATION
  // const validateInput = (input) => {
  //   const isValid = input.value.length > 0;
  //   if (!isValid) {
  //     setError(false)
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(validator.isEmail(email));
    // if (error == false){
    //   alert("Fill in all fields")
    // }
    addInventoryItem(
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
      <section className="addInventoryItem-header">
        <img
          className="addInventoryItem-header__icon"
          src={backIcon}
          alt="back-button"
        />
        <h1 className="addInventoryItem-header__title">
          Add New Inventory Item
        </h1>
      </section>
      <form className="form" id="addInventoryItemForm" onSubmit={submitHandler}>
        <div className="form-fields-wrapper">
          <div className="form__fields">
            <h2 className="form__title">Item Details</h2>
            <label htmlFor="name" className="form__label">
              Item Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Item Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="description" className="form__label">
              Description
            </label>
            <textarea
              className="form__textarea"
              placeholder="Please enter a brief item description..."
              name="description"
            ></textarea>
            <label htmlFor="category" className="form__label">
              Category
            </label>
            <select name="category" className="form__input">
              <option value="Accessories">Accessories</option>
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
              <input type="radio" name="stock" value="In Stock" />
              <label className="form__label--radio">In Stock</label>
              <input type="radio" name="stock" value="Out of stock" />
              <label className="form__label--radio">Out of stock</label>
            </div>
            <label htmlFor="quantity" className="form__label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value="0"
              className="form__input"
            />

            <label htmlFor="warehouse" className="form__label">
              Warehouse
            </label>
            <select name="warehouse" className="form__input">
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
          form="addWarehouseForm"
        >
          + Add Warehouse
        </button>
      </section>
    </main>
  );
};

export default AddInventoryItem;
