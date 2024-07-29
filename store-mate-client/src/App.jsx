import "./App.css";
import { Navbar } from "./components/Navbar";
import { Inventory } from "./components/Inventory";

function App() {

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden ">
      <Navbar />
      <Inventory />
    </div>
  );
}

export default App;
