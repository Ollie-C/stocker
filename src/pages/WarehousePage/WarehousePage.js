import React, { useEffect, useState } from "react";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";
import axios from "axios";
import Modal from "../../Components/Modal/Modal";

const WarehousePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [warehouses, SetWarehouses] = useState([]);

  //////////////////////////////////////////////Modal
  //set show modal first to false
  const hideModal = () => {
    setShowModal(false);
  };
  //select product to open a model
  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);

    setShowModal(true);
  };
  //////////////////////////////////////////////Modal

  ///get warehouses
  const getwarehouses = async () => {
    const { data } = await axios.get("http://localhost:8080/warehouses");
    SetWarehouses(data);
    console.log(data);
  };

  useEffect(() => {
    getwarehouses();
  }, []);

  /////////////////////////axios delete warehouses
  const deleteWarehouse = (warehouseId) => {
    console.log("delete clicked");
    axios
      .delete(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        axios.get(`http://localhost:8080/warehouses`).then((response) => {
          SetWarehouses(response.data);
          setShowModal(false);
          console.log(response.data);
        });
      });
  };

  /////////////////////////axios delete warehouses

  return (
    <>
      <WarehouseList
        warehouses={warehouses}
        handleSelectedProduct={handleSelectedProduct}
      />
      {showModal ? (
        <Modal
          hideModal={hideModal}
          deleteWarehouse={deleteWarehouse}
          selectedProduct={selectedProduct}
        />
      ) : null}
    </>
  );
};
// return (
//   <>
//     <div>
//       <button onClick={handleSelectedProduct}>click Modal</button>
//     </div>
//     {showModal ? (
//       <Modal
//         handleSelectedProduct={handleSelectedProduct}
//         hideModal={hideModal}
//       />
//     ) : null}

export default WarehousePage;
