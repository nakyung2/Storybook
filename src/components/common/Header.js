import React from "react";
import { NavLink } from "react-router-dom";

import './Header.css'

const Header = (props) => {
  const { title, setTitle } = props
  const onNavBtn = (isClicked) => {
    setTitle(isClicked)
  } 
  if (!title) {
    return (
      <div className="header">
        {/* <NavLink
          onClick={() => onNavBtn(false)}
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          Woori Zip
        </NavLink> */}
        <div className="header-title">Woori Zip</div>
        <NavLink
          onClick={()=> onNavBtn(true)}
          to="/blog"
          className={({ isActive }) => (isActive ? "link-active" : "link")}
        >
          블로그
      </NavLink>

      </div>
    )
  } else {
    return (
      <div className="header">
        <div className="header-title">
          <span className="header-title-name">이지금</span>
          's Woori Zip</div>
      </div>
    )
  }
}

export default Header