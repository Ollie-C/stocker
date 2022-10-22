import backIcon from "../../assets/Icons/arrow_back-24px.svg";
import "./EditWarehouse.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditWarehouse = ({ getWarehouses }) => {
  const navigate = useNavigate();
  const { warehouseId } = useParams();
  const [showMessage, setShowMessage] = useState(false);

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
    e.preventDefault();

    console.log("saved button clicked");

    if (
      name.trim("") === "" &&
      address.trim("") &&
      city.trim("") &&
      country.trim("") &&
      contactName.trim("") &&
      position.trim("") &&
      phone.trim("") &&
      email.trim("")
    ) {
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
    // setShowMessage(true);

    navigate("/");
  };

  const saveHandler = (e) => {
    e.preventDefault();
    editWarehouse(
      e,
      formFields.name,
      formFields.address,
      formFields.city,
      formFields.country,
      formFields.contactName,
      formFields.position,
      formFields.phone,
      formFields.email
    );
    // console.log("success");
  };

  useEffect(() => {
    // GET request to /warehouses/:warehouseId
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
            value={formFields.name}
            onChange={(e) => inputChangeHandler(e)}
          />
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
          />
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
          />
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
          />
        </div>
        <div className="form__fields form__fields--active">
          <h2 className="form__title">Contact Details</h2>
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
          />
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
          />
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
          />
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
