import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOverlay } from "../redux/dataSlice";
import { NavLink } from "react-router-dom";

const OverlayMenu = () => {
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
    <>
      {overlay && (
        <div className="overlay" onClick={handleClickClose}>
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
            <li className="iconContact">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-envelope"></i>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default OverlayMenu;
