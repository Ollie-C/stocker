import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";
import AddWarehouse from "./Components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./Components/EditWarehouse/EditWarehouse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="parent">
          <div className="app-container">
            <Routes>
              <Route path="/" element={<WarehousePage />} />
              <Route path="/warehouses/add" element={<AddWarehouse />} />
              <Route path="/:warehouseId/edit" element={<EditWarehouse />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
