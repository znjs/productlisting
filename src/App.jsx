import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart, Navbar, ProductListing } from "./components";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
