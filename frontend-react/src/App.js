import "./App.css";

import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeesList from "./components/EmployeesList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees/form" element={<AddEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
