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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <EmployeesList />
              </>
            }
          />
          <Route
            path="/employees/form"
            element={
              <>
                <Navbar />
                <AddEmployee />
              </>
            }
          />
          <Route path="/login" element={<Login isLogin={true} />} />
          <Route path="/register" element={<Login isLogin={false} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
