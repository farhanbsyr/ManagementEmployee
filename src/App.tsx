import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import EmployeePage from "./pages/employee/EmployeePage";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<EmployeePage />} path="/employee" />
    </Routes>
  );
}

export default App;
