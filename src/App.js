import { useState } from "react";
import Modal from "./Components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //set show modal first to false
  const hideModal = () => {
    setShowModal(false);
  };

  //select product to open a model
  const handleSelectedProduct = (e, product) => {
    setSelectedProduct(product);

    setShowModal(true);
  };

  return (
    <>
      <div>
        <button onClick={handleSelectedProduct}>click Modal</button>
      </div>
      {showModal ? (
        <Modal
          handleSelectedProduct={handleSelectedProduct}
          hideModal={hideModal}
        />
      ) : null}
    </>
  );
}

export default App;
