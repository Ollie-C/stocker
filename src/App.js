import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";

import { useState, useEffect } from "react";
import axios from "axios";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventory from "./Components/EditInventory/EditInventory";

function App() {
  const [warehouses, SetWarehouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [inventories, setInventories] = useState([]);

  const getInventories = async () => {
    const { data } = await axios.get("http://localhost:8080/inventory");
    setInventories(data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  const getWarehouses = async () => {
    const { data } = await axios.get("http://localhost:8080/warehouses");
    SetWarehouses(data);
  };

  useEffect(() => {
    getWarehouses();
  }, []);

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
    // setShowModal(true);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  const deleteWarehouse = (warehouseId) => {
    console.log("delete clicked");
    axios
      .delete(`http://localhost:8080/warehouses/${warehouseId}`)
      .then((response) => {
        axios.get(`http://localhost:8080/warehouses`).then((response) => {
          SetWarehouses(response.data);
          setShowModal(false);
        });
      });
  };

  //delete Inventory
  const deleteInventory = (itemId) => {
    console.log("delete clicked");
    axios
      .delete(`http://localhost:8080/inventory/${itemId}`)
      .then((response) => {
        axios.get(`http://localhost:8080/inventory`).then((response) => {
          setInventories(response.data);
          setShowModal(false);
        });
      });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="parent">
          <div className="app-container">
            <Routes>
              <Route
                path="/"
                element={
                  <WarehousePage
                    warehouses={warehouses}
                    deleteWarehouse={deleteWarehouse}
                    showModal={showModal}
                    hideModal={hideModal}
                    handleSelectedProduct={handleSelectedProduct}
                    selectedProduct={selectedProduct}
                    showModalHandler={showModalHandler}
                  />
                }
              />
              {/* <Route InventoryPage inventories={inventories} /> */}
              <Route path="/warehouses/add" element={<AddWarehouse />} />
              <Route path="/:warehouseId/edit" element={<EditWarehouse />} />
              <Route
                path="/warehouses/details/:warehouseId"
                element={<WarehouseDetails />}
              />

              <Route
                path="/inventory"
                element={
                  <InventoryPage
                    inventories={inventories}
                    deleteInventory={deleteInventory}
                    showModal={showModal}
                    hideModal={hideModal}
                    handleSelectedProduct={handleSelectedProduct}
                    selectedProduct={selectedProduct}
                    showModalHandler={showModalHandler}
                  />
                }
              />
              <Route
                path="/inventory/inventory/:itemId/edit"
                element={<EditInventory />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
