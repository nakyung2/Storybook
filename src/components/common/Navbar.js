import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {  
    const { title, setTitle } = props

    const onNavBtn = (isClicked) => {
      console.log(isClicked)
      setTitle(isClicked)
    } 

    if (!title) {
      return (
        <nav>
          <NavLink
            onClick={() => onNavBtn(false)}
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            트렌드
          </NavLink>
          <NavLink
            onClick={() => onNavBtn(false)}
            to="/search"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            검색
          </NavLink>
        </nav>
      )
    } else {
      return (
        <>
          <NavLink
            onClick={() => onNavBtn(false)}
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            메인
          </NavLink>
          <nav>
            <NavLink
              onClick={() => onNavBtn(true)}
              to="/blog"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              블로그
            </NavLink>
            <NavLink
              onClick={() => onNavBtn(true)}
              to="/calendar"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              캘린더
            </NavLink>
            <NavLink
              onClick={() => onNavBtn(true)}
              to="/article"
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              방명록
            </NavLink>
          </nav>
        </>
      );
    }
  };

  export default NavBar