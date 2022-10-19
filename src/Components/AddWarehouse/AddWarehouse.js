//styles
import "./AddWarehouse.scss";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/Icons/arrow_back-24px.svg";

const AddWarehouse = () => {
  //   const navigate = useNavigate();
  //   const [name, setName] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [city, setcity] = useState("");
  //   const [country, setcountry] = useState("");
  //   const [contactName, setcontactName] = useState("");
  //   const [position, setposition] = useState("");
  //   //   const [phone, setphone] = useState("");
  //   //   const [email, setemail] = useState("");

  //   const addWarehouse = async (e) => {
  //     e.preventDefault();
  //     const { data } = await axios
  //       .post("http://localhost:8080/warehouses", {
  //         name: name,
  //         address: address,
  //         city: city,
  //         country: country,
  //         contact: {
  //           contactName: contactName,
  //           position: position,
  //           phone: phone,
  //           email: email,
  //         },
  //       })
  //       .catch((error) => {
  //         alert(error.response.statusText);
  //         console.log(error.response);
  //       });
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    //   addWarehouse();
    //   alert("Success.");
    //   navigate("/");
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
          <label htmlFor="emai" className="form__label">
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
        <button className="form__button" /*onClick={() => navigate(-1)}*/>
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
