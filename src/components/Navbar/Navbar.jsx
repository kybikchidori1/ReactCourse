import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  const activeLinkHandler = ({ isActive }) => {
    return isActive ? s.active : "";
  };
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={activeLinkHandler}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={activeLinkHandler}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={activeLinkHandler}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={activeLinkHandler}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? `${s.active}` : "")}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
