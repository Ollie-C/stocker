import WarehouseList from "../../Components/WarehouseList/WarehouseList";
import Modal from "../../Components/Modal/Modal";

const WarehousePage = ({
  warehouses,
  showModal,
  deleteWarehouse,
  hideModal,
  handleSelectedProduct,
  selectedProduct,
  showModalHandler,
}) => {
  return (
    <>
      <WarehouseList
        warehouses={warehouses}
        handleSelectedProduct={handleSelectedProduct}
        showModalHandler={showModalHandler}
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

export default WarehousePage;
