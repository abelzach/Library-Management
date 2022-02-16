import React from "react";
import {Link} from "react-router-dom"
import "./Header.css";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                {" "}
                {/* <a href="/issue">Issue Book</a>{" "} */}
                <Link to="/issue">Issue Book</Link>
              </li>
              
              <li>
                {" "}
                {/* <a href="/insert">Insert Book</a>{" "} */}
                <Link to="/insert">Insert</Link>
              </li>
              <li>
                {" "}
                {/* <a href="/return">Pending Returns</a>{" "} */}
                <Link to="/return">Pending Returns</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Home;
