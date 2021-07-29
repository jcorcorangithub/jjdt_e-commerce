import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Header = () => {
    if (Auth.loggedIn()) {
      return (
        <header>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to='/cart'>
              Order 
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
          <li className="mx-1">
            <Link to="/profile">
              Profile
            </Link>
          </li>
        </ul>
        </header>
      );
    } else {
      return (
        <header>
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/signin">
              Login
            </Link>
          </li>
        </ul>
        </header>
      );
    }
  }



export default Header