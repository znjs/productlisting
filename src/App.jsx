import "./App.css";
import { Aside, Navbar, Products } from "./components";

function App() {
  return (
    <div className="bg-gray-200 flex flex-col h-screen">
      <Navbar />
      <div className="grow bg-gray-200">
        <div className="flex flex-row relative max-w-[1500px] mx-auto">
          <Aside />
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
