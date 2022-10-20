import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./styles/partials/_resets.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="parent">
          <div className="app-container">
            <Routes>
              <Route path="/" element={<WarehousePage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
