import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/warehouses/add" element={<AddWarehouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
