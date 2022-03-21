import React from "react";
import Banner from "./Banner/Banner";
import HospitalDepartment from "./HospitalDepartment/HospitalDepartment";
import OurDoctors from "./OurDoctors/OurDoctors";
import OurServices from "./OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner />
      <OurDoctors />
      <OurServices />
      <HospitalDepartment />
    </div>
  );
};

export default Home;
