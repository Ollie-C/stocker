import React from "react";
import InventoryList from "../../Components/InventoryList/InventoryList";
import InventoryModal from "../../Components/InventoryModal/InventoryModal";
import Modal from "../../Components/Modal/Modal";

const InventoryPage = ({
  inventories,
  showModal,
  hideModal,
  deleteInventory,
  showModalHandler,
  handleSelectedProduct,
  selectedProduct,
}) => {
  return (
    <>
      <InventoryList
        inventories={inventories}
        handleSelectedProduct={handleSelectedProduct}
        showModalHandler={showModalHandler}
      />
      {showModal ? (
        <InventoryModal
          hideModal={hideModal}
          deleteInventory={deleteInventory}
          selectedProduct={selectedProduct}
        />
      ) : null}
    </>
  );
};

export default InventoryPage;
