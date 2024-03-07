import "./App.css";

// react router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
