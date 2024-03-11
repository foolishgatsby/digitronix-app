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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="account" element={<AccountAdmin />} />
          <Route path="warehouse">
            <Route path="product" element={<ProductAdmin />}></Route>
            <Route path="material" element={<MaterialAdmin />}></Route>
          </Route>
          <Route path="order" element={<OrderAdmin />}></Route>
          <Route path="customer" element={<CustomerAdmin />}></Route>
          <Route path="delivery" element={<DeliveryAdmin />}></Route>
          <Route path="production" element={<ProductionAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
