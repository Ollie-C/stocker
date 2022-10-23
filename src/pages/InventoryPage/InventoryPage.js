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
  sortInventory,
  search,
  setSearch,
}) => {
  return (
    <>
      <InventoryList
        inventories={inventories}
        handleSelectedProduct={handleSelectedProduct}
        showModalHandler={showModalHandler}
        sortInventory={sortInventory}
        search={search}
        setSearch={setSearch}
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
