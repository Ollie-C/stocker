import { useState } from "react";
import Modal from "./Components/Modal/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<WarehousePage />} />
          <Route path="/:warehouseId/edit" element={<EditWarehouse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
