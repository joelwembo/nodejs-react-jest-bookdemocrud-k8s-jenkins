import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



function Header() {
  return (

      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="/books" className="navbar-brand">
          Demo App
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/books"} className="nav-link">
              Books
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Create
            </Link>
          </li>
        </div>
      </nav>

  );
}

export default Header;
