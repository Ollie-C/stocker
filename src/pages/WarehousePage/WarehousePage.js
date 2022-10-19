import React, { useEffect, useState } from "react";
import WarehouseList from "../../Components/WarehouseList/WarehouseList";
import axios from "axios";

const WarehousePage = () => {
  const [warehouses, SetWarehouses] = useState([]);

  const getwarehouses = async () => {
    const { data } = await axios.get("http://localhost:8080/warehouses");
    SetWarehouses(data);
    console.log(data);
  };

  useEffect(() => {
    getwarehouses();
  }, []);

  return <WarehouseList warehouses={warehouses} />;
};

export default WarehousePage;
