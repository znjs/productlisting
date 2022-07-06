import "./App.css";
import { Aside, Navbar, Products } from "./components";

function App() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="flex flex-row  relative max-w-[1500px] mx-auto">
        <Aside />
        <Products />
      </div>
    </div>
  );
}

export default App;
