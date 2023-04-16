import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label for="nav-toggle"></label>
      <h1>
        <Link to={"/"} className="logo">
          MyPage
        </Link>
      </h1>
      <div className="links">
        <ul>
          <li>
            <Link to={"/weather"}>Weather</Link>
          </li>
          <li>
            <Link to={"/calculator"}>Calculator</Link>
          </li>
          <li>
            <Link to={"/todolist"}>Todo List</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
