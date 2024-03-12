import "./App.css";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import AdminTemplate from "./templates/AdminTemplates/AdminTemplate";
import AccountAdmin from "./pages/Admin/Account/AccountAdmin";
import ProductAdmin from "./pages/Admin/Product/ProductAdmin";
import MaterialAdmin from "./pages/Admin/Material/MaterialAdmin";
import OrderAdmin from "./pages/Admin/Order/OrderAdmin";
import CustomerAdmin from "./pages/Admin/Customer/CustomerAdmin";
import DeliveryAdmin from "./pages/Admin/Delivery/DeliveryAdmin";
import ProductionAdmin from "./pages/Admin/Production/ProductionAdmin";
import SaleTemplate from "./templates/SaleTemplates/SaleTemplate";
import ProductSale from "./pages/Sale/Product/ProductSale";
import OrderSale from "./pages/Sale/Order/OrderSale";
import CustomerSale from "./pages/Sale/Customer/CustomerSale";
import DeliverySale from "./pages/Sale/Delivery/DeliverySale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="" element={<Login />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="accounts" element={<AccountAdmin />} />
          <Route path="warehouse">
            <Route path="products" element={<ProductAdmin />}></Route>
            <Route path="materials" element={<MaterialAdmin />}></Route>
          </Route>
          <Route path="orders" element={<OrderAdmin />}></Route>
          <Route path="customers" element={<CustomerAdmin />}></Route>
          <Route path="deliveries" element={<DeliveryAdmin />}></Route>
          <Route path="productions" element={<ProductionAdmin />}></Route>
        </Route>
        <Route path="sale" element={<SaleTemplate />}>
          <Route path="products" element={<ProductSale />}></Route>
          <Route path="orders" element={<OrderSale />}></Route>
          <Route path="customers" element={<CustomerSale />}></Route>
          <Route path="deliveries" element={<DeliverySale />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
