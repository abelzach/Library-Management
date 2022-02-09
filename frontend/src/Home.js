import React from "react";

import "./Home.css";

const Home = () => {
  return (
    <>
      <nav>
        <div className="nav-bar">
          <span className="logo">
            <a href="#">Zephyr Books</a>{" "}
          </span>

          <div className="menu">
            <ul className="nav-links">
              <li>
                {" "}
                <a href="#">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Issue Book</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Insert Book</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Pending Returns</a>{" "}
              </li>
              <li>
                {" "}
                <a href="#">Contact</a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Home;
