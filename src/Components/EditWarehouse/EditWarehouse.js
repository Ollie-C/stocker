import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditWarehouse.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import errorIcon from "../../assets/Icons/error-24px.svg";
import {
  isEmpty,
  isNotAlphanumeric,
  isInvalidPhone,
  isInvalidEmail,
} from "../../utils/Helpers.js";

const EditWarehouse = ({ getWarehouses }) => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();
  const [formErrors, setFormErrors] = useState({});

  const [formFields, setFormFields] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    position: "",
    phone: "",
    email: "",
  });

  // Will update the correct input state, based
  // on whichever input the user changed.
  const inputChangeHandler = (e) => {
    const value = e.target.value;

    setFormFields({
      ...formFields,
      [e.target.name]: value,
    });
    console.log(formFields);
  };

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
    const { data } = await axios.put(
      `http://localhost:8080/warehouses/${warehouseId}`,
      formFields
    );

    navigate("/");
  };

  const saveHandler = (e) => {
    e.preventDefault();
    const submittedValues = Object.values(formFields);
    const filteredValues = submittedValues.filter((value) => {
      return value;
    });
    if (filteredValues.length < 8) {
      alert("Please fill in all fields");
      return false;
    }

    editWarehouse();
    // console.log("success");
  };

  const isValidInput = (e, type) => {
    const { name, value } = e.target;
    let error = null;

    if (type === "regular") {
      error = isNotAlphanumeric(value);
    }
    if (type === "phone") {
      error = isInvalidPhone(value);
    }
    if (type === "email") {
      error = isInvalidEmail(value);
    }

    if (isEmpty(value)) {
      error = isEmpty(value);
    }

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
    console.log(formErrors);
  };

  useEffect(() => {
    const getWarehouseDetails = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/warehouses/${warehouseId}`
      );

      setFormFields({
        name: data.name,
        address: data.address,
        city: data.city,
        country: data.country,
        contactName: data.contact.name,
        position: data.contact.position,
        phone: data.contact.phone,
        email: data.contact.email,
      });
    };

    getWarehouseDetails();
    // Set the state above
  }, [warehouseId]);
  getWarehouses();

  return (
    <main className="main">
      <section className="editWarehouse-header">
        <Link className="editWarehouse-header__icon-container" to="/">
          <img
            className="editWarehouse-header__icon"
            src={backIcon}
            alt="back-button"
          />
        </Link>

        <h1 className="editWarehouse-header__title">Edit Warehouse</h1>
      </section>
      <form
        className="form"
        id="addWarehouseForm"
        onSubmit={(e) => saveHandler(e)}
      >
        <div className="form__fields">
          <h2 className="form__title">Warehouse Details</h2>

          <div className="form-wrapper">
            <label htmlFor="name" className="form__label">
              Warehouse Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Warehouse Name"
              name="name"
              value={formFields.name}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.name ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.name}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="address" className="form__label">
              Street Address
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Street Address"
              name="address"
              value={formFields.address}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.address ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.address}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="city" className="form__label">
              City
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="City"
              name="city"
              value={formFields.city}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.city ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.city}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="country" className="form__label">
              Country
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Country"
              name="country"
              value={formFields.country}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.country ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.country}</p>
            </div>
          </div>
        </div>
        <div className="form__fields form__fields--active">
          <h2 className="form__title">Contact Details</h2>
          <div className="form-wrapper">
            <label htmlFor="contactName" className="form__label">
              Contact Name
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Contact Name"
              name="contactName"
              value={formFields.contactName}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.contactName ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.contactName}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="position" className="form__label">
              Position
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Position"
              name="position"
              value={formFields.position}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "regular")}
            />
            <div
              style={{ display: formErrors.position ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.position}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="phone" className="form__label">
              Phone Number
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Phone Number"
              name="phone"
              value={formFields.phone}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "phone")}
            />
            <div
              style={{ display: formErrors.phone ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.phone}</p>
            </div>
          </div>
          <div className="form-wrapper">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="Email"
              name="email"
              value={formFields.email}
              onChange={(e) => inputChangeHandler(e)}
              onBlur={(e) => isValidInput(e, "email")}
            />
            <div
              style={{ display: formErrors.email ? "flex" : "none" }}
              className="form__error-container"
            >
              <img className="form__icon" src={errorIcon} alt="error-icon" />
              <p className="form__error">{formErrors.email}</p>
            </div>
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
          Save
        </button>
      </section>
    </main>
  );
};
export default EditWarehouse;
