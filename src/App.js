import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./context/Context";
import Appointment from "./Pages/Appointment/Appointment";
import DepartmentDetail from "./Pages/DepartmentDetail/DepartmentDetail";
import DoctorDetail from "./Pages/DoctorDetail/DoctorDetail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor/:id" element={<DoctorDetail />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/department/:id" element={<DepartmentDetail />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
}

export default App;
