import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Projects",
      icon: "icons/project.svg",
    },
    {
      text: "Tasks",
      icon: "icons/tasks.svg",
    },
    {
      text: "Calendar",
      icon: "icons/cal.svg",
    },
    {
      text: "Kanban",
      icon: "icons/kanban.svg",
    },
    {
      text: "Employee",
      icon: "icons/users.svg",
    },
    {
      text: "Role",
      icon: "icons/role.svg",
    },
  ];
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="/public/icons/Taskify Logo.png" alt="" />
              <h2>TASKIFY</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
              key={text}
            >
              <img className="menu-item-icon" src={icon} alt="" srcSet="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="./avatar.jpg"
              alt=""
              srcSet=""
            />
            <div className="nav-footer-info"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
