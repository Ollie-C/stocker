import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";
import AddInventoryItem from "./Components/AddInventoryItem/AddInventoryItem";
import WarehouseDetails from "./Components/WarehouseDetails/WarehouseDetails";

import { useState, useEffect } from "react";
import axios from "axios";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import EditInventory from "./Components/EditInventory/EditInventory";
import InventoryItemDetails from "./Components/InventoryItemDetails/InventoryItemDetails";

function App() {
  const [warehouses, SetWarehouses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [inventories, setInventories] = useState([]);

  ///searches
  const [search, setSearch] = useState("");

  ////////////////////////////search

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

  //////////////////////////asc-desc warehouse
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...warehouses].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      SetWarehouses(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...warehouses].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      SetWarehouses(sorted);
      setOrder("ASC");
    }
  };
  //////////////////////////asc-desc
  //////////////////////////asc-desc warehouse
  const sortInventory = (col) => {
    console.log("sort click");
    if (order === "ASC") {
      const sorted = [...inventories].sort((a, b) =>
        a[col] > b[col] ? 1 : -1
      );
      setInventories(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...inventories].sort((a, b) =>
        a[col] < b[col] ? 1 : -1
      );
      setInventories(sorted);
      setOrder("ASC");
    }
  };
  //////////////////////////asc-desc

  return (
    <>
      <BrowserRouter>
        <div className="flex-wrapper">
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
                      search={search}
                      setSearch={setSearch}
                      sorting={sorting}
                    />
                  }
                />

                <Route
                  path="/warehouses/add"
                  element={<AddWarehouse getWarehouses={getWarehouses} />}
                />
                <Route
                  path="/warehouses/details/:warehouseId"
                  element={
                    <WarehouseDetails
                      handleSelectedProduct={handleSelectedProduct}
                      showModalHandler={showModalHandler}
                    />
                  }
                />
                <Route
                  path="/warehouses/:warehouseId/edit"
                  element={<EditWarehouse getWarehouses={getWarehouses} />}
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
                      sortInventory={sortInventory}
                      search={search}
                      setSearch={setSearch}
                    />
                  }
                />
                <Route
                  path="/inventory/:itemId"
                  element={<InventoryItemDetails />}
                />
                <Route
                  path="/inventory/:itemId/edit"
                  element={<EditInventory getInventories={getInventories} />}
                />
                <Route
                  path="/inventory/add"
                  element={
                    <AddInventoryItem
                      warehouses={warehouses}
                      getInventories={getInventories}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
