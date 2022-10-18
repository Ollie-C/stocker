import React from "react";
import "./Modal.scss";
import close from "../../assets/Icons/close-24px.svg";

const Modal = () => {
  return (
    <section className="modal">
      <div className="modal__cross-icon">
        <img src={close} alt="" />
      </div>
      <div className="modal__title-container">
        <h1 className="modal__title-container">Delete Washington warehouse</h1>
      </div>
      <div className="modal__confirmation">
        <p className="modal__confirmation-paragraph">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
      </div>
      <div className="modal__buttons">
        <button className="modal__button-cancel">cancel</button>
        <button className="modal__button-delete">delete</button>
      </div>
    </section>
  );
};

export default Modal;
