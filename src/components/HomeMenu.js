import React from "react";
import { useDispatch } from "react-redux";
import { updateOverlay } from "../redux/dataSlice";

const HomeMenu = () => {
  const dispatch = useDispatch();
  const handleClickOpenMenu = () => {
    dispatch(updateOverlay(true));
  };
  return (
    <div id="homeMenu">
      <div className="bar" onClick={handleClickOpenMenu}>
        <i className="fa-solid fa-bars"></i>
        Menu
      </div>
      <div className="brandName">
        <h1>NAM</h1>
        <p>invest - realty</p>
      </div>
      <div className="iconContact">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-solid fa-envelope"></i>
      </div>
    </div>
  );
};

export default HomeMenu;
