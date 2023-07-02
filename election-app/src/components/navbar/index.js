import React from "react";

export const NavBar = ({ children, href, title }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href={href}>
            {title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{children}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const NavLink = (props) => {
  return (
    <div>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href={props.href}>
          {props.link}
        </a>
      </li>
    </div>
  );
};

export const NavDrop = ({ children, href, title }) => {
  return (
    <div>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href={href}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {title}
        </a>
        <ul className="dropdown-menu">
          <li>{children}</li>
        </ul>
      </li>
    </div>
  );
};
