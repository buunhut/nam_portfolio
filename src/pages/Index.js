import React from "react";
import HomeMenu from "../components/HomeMenu";
import TopMenu from "../components/TopMenu";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div id="index">
      <TopMenu data={false} />

      <video autoPlay muted className="video">
        <source src={`/img/bannerV.mp4`} type="video/mp4" />
      </video>
      <div className="welcome">
        <p>welcome to</p>
        <h1>NAM IHOME</h1>
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
