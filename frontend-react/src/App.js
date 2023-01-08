import "./App.css";

import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";

import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees/form" element={<AddEmployee />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
