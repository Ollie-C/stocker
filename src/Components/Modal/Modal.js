import React from "react";
import "./Modal.scss";
import closeBtn from "../../assets/Icons/close-24px.svg";
import { Link } from "react-router-dom";

const Modal = ({ hideModal, handleSelectedProduct }) => {
  return (
    <section className="modal">
      <div className="modal__card">
        <div className="modal__card-within">
          {/* <Link to="/"> */}
          <img className="modal__cross-btn" src={closeBtn} alt="" />
          {/* </Link> */}
          <div className="modal__title-paragraph-container">
            <h1 className="modal__title">Delete Washington warehouse</h1>
            <p className="modal__confirmation-paragraph">
              Please confirm that you’d like to delete the Washington from the
              list of warehouses. You won’t be able to undo this action.
            </p>
          </div>
          <div className="modal__buttons">
            <button onClick={hideModal} className="modal__button-cancel">
              cancel
            </button>
            <button className="modal__button-delete">delete</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
