import React from "react";
import InventoryList from "../../Components/InventoryList/InventoryList";

const InventoryPage = ({ inventories }) => {
  return (
    <>
      <InventoryList inventories={inventories} />
    </>
  );
};

export default InventoryPage;
