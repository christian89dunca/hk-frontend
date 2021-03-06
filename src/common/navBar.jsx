import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mb-0 h1" to="/">
        HK
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-item nav-link" to="/projects">
            Employees
          </NavLink>
          <NavLink className="nav-item nav-link" to="/projects">
            Clients
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink
                className="nav-item nav-link btn-wrapper ml-auto"
                to="/login"
              >
                Login
              </NavLink>
              {/* <NavLink
                className="nav-item nav-link btn-wrapper ml-2"
                to="/register"
              >
                Register
              </NavLink> */}
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link ml-auto" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-item nav-link ml-2" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
