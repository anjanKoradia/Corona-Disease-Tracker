import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Shared/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
