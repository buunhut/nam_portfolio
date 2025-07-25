import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOverlay } from "../redux/dataSlice";

const Home = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
