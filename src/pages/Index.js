import React from "react";
import HomeMenu from "../components/HomeMenu";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div id="index">
      <HomeMenu />
      <div className="welcome">
        <p>welcome to</p>
        <h1>NAM CONCEPT</h1>
        <button type="button">
          <p>
            <NavLink to={"/portfolio"}>
              View our work{" "}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </NavLink>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Index;
