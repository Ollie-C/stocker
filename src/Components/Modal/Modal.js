import React from "react";
import "./Modal.scss";
import closeBtn from "../../assets/Icons/close-24px.svg";
import { Link } from "react-router-dom";

const Modal = ({
  hideModal,
  handleSelectedProduct,
  deleteWarehouse,
  selectedProduct,
}) => {
  return (
    <section className="modal">
      <div className="modal__card">
        <div className="modal__card-within">
          <button className="modal__cross-btn" onClick={hideModal}>
            <img className="modal__cross-btn" src={closeBtn} alt="cross-btn" />
          </button>
          <div className="modal__title-paragraph-container">
            <h1 className="modal__title">
              Delete {selectedProduct.name} warehouse
            </h1>
            <p className="modal__confirmation-paragraph">
              Please confirm that you’d like to delete the{" "}
              {selectedProduct.name} from the list of warehouses. You won’t be
              able to undo this action.
            </p>
          </div>
          <div className="modal__buttons">
            <button onClick={hideModal} className="modal__button-cancel">
              cancel
            </button>
            <button
              onClick={() => deleteWarehouse(selectedProduct.id)}
              className="modal__button-delete">
              delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
