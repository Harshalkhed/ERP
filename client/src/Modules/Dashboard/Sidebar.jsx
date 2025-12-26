import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsCollapsed(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsCollapsed(true);
  };

  return (
    <div
      className={`sidebar ${isHovered || !isCollapsed ? "expanded" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu">
        <h2 className="logo">{isCollapsed ? "IM" : "Industrimate"}</h2>
        <ul>
          <li>
            <Link to="/dashboard">
              <i className="fa fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="#buy">
              <i className="fa fa-shopping-cart"></i>
              <span>Buying</span>
            </Link>
          </li>
          <li>
            <Link to="#stock">
              <i className="fa fa-warehouse"></i>
              <span>Inventory</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/employe">
              <i className="fa fa-users"></i>
              <span>WorkForce</span>
            </Link>
          </li>
          <li>
            <Link to="#production">
              <i className="fa fa-industry"></i>
              <span>Production</span>
            </Link>
          </li>
          <li>
            <Link to="#sell">
              <i className="fa fa-money-bill-wave"></i>
              <span>Selling</span>
            </Link>
          </li>
          <li>
            <Link to="#daily">
              <i className="fa fa-calendar"></i>
              <span>Day book</span>
            </Link>
          </li>
          <li>
            <Link to="#reports">
              <i className="fa fa-chart-line"></i>
              <span>Reporting</span>
            </Link>
          </li>
          <li>
            <Link to="#logout">
              <i className="fa fa-sign-out-alt"></i>
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
