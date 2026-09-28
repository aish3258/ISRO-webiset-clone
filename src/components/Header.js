import React, { useState } from "react";
import isro from "./images/download-removebg-preview.png";
import tiger from "./images/images-removebg-preview.png";

function Header() {
  const [active, setActive] = useState("");

  return (
    <div>
      {/* top content */}
      <div style={{ backgroundColor: "#0B3D91"}}>
        <div style={{color: "white", marginLeft: "30px", padding:"10px", display: " flex"}}>
         <pre> Enlish | Hindi | Sitemap | Contact Us | Feeedback | RTI | Career                                                                     skip to main content                  
       </pre> </div>
      </div>


      {/* Logo and Name */}
      <div
        style={{
          backgroundColor: "#0B2C4A",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "8px 20px",
        }}
      >
        {/* ISRO Logo */}
        <img src={isro} alt="ISRO Logo" width="100" />

        {/* Center Text */}
        <div
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
            भारतीय अंतरिक्ष अनुसंधान संगठन, अंतरिक्ष विभाग
          </div>

          <div style={{ fontSize: "28px", fontWeight: "bold" }}>
            Indian Space Research Organisation, Department of Space
          </div>

          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            भारत सरकार / Government of India
          </div>
        </div>

        {/* Tiger Emblem */}
        <img src={tiger} alt="Government Emblem" width="80" />
      </div>

      {/* // <Nav bar  */}
      <div>
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "#0B3D91" }}
        >
          <div
            className="container-fluid"
            style={{ marginLeft: " 30px", marginRight: "30px" }}
          >
            {/* Home button */}
            <a className="navbar-brand" href="#">
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* About dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${active === "about" ? "active-yellow" : ""}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setActive("about")}
                  >
                    About
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Vision-Mission-Objective
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Citizen Character
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Organisation Sturcture
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Dos Centers/Units/Enterprise
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Former Secretaries/ Chairmans
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Space Commission
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Autonomous Bodies
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Activities Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${active === "activities" ? "active-yellow" : ""}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setActive("activities")}
                  >
                    Activites
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Mission Accomplished
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Upcoming Missions
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Science
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Launchers
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Satellites
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Space Applications
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Research & Development
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gaganyaan
                      </a>
                    </li>
                  </ul>
                </li>

                {/* Services Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className={`nav-link dropdown-toggle ${active === "services" ? "active-yellow" : ""}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setActive("services")}
                  >
                    Services
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Launch Service
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mission Report
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ground System supports
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Space based Earth Observation
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Satellite Navigation
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Meterological & Ocenographic Satellite data
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Disaster Management
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mission Support
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
