import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Context from "./context/Context";
import Appointment from "./Pages/Appointment/Appointment";
import AllAppointment from "./Pages/Dashboard/AllAppointment/AllAppointment";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardRoute from "./Pages/Dashboard/DashboardRoute";
import SetCoupon from "./Pages/Dashboard/SetCoupon/SetCoupon";
import DepartmentDetail from "./Pages/DepartmentDetail/DepartmentDetail";
import DoctorDetail from "./Pages/DoctorDetail/DoctorDetail";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyAppointment from "./Pages/MyAppointment/MyAppointment";
import Payment from "./Pages/Payment/Payment";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
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
          <Route path="/my-appointment" element={<MyAppointment />} />
          <Route path="/payment/:id" element={<Payment />} />
          <Route
            path="/doctor/:id"
            element={
              <PrivateRoute>
                <DoctorDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/service/:id"
            element={
              <PrivateRoute>
                <ServiceDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/department/:id"
            element={
              <PrivateRoute>
                <DepartmentDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardRoute>
                <Dashboard />
              </DashboardRoute>
            }
          >
            <Route path="/dashboard" element={<AllAppointment />} />
            <Route path="/dashboard/coupon" element={<SetCoupon />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
}

export default App;
