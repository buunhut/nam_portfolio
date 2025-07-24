import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to={"/portfolio"}>Portfolio</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
      <p>Copyright 2025 © NAM CONCEPT</p>
    </footer>
  );
};

export default Footer;
