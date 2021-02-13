import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Shared/Navbar/Navbar.jsx";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
