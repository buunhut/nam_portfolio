import React, { useEffect } from "react";
import Footer from "../components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateOverlay } from "../redux/dataSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { overlay } = useSelector((state) => state.dataSlice);
  const handleClickClose = () => {
    dispatch(updateOverlay(false));
  };

  // ⚠️ Lock scroll when overlay is shown
  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return (
    <div>
      <Outlet />
      <Footer />
      {overlay && (
        <div className="overlay">
          <div className="close">
            <i className="fa-solid fa-xmark" onClick={handleClickClose}></i>
          </div>
          <ul>
            <li onClick={handleClickClose}>
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </li>
            <li onClick={handleClickClose}>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li onClick={handleClickClose}>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <div className="iconContact">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
