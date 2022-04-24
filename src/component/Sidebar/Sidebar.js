import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { GiPencilBrush } from "react-icons/gi";
import { GiConfirmed } from "react-icons/gi";
import { RiPagesLine, RiInputMethodLine } from "react-icons/ri";
import axios from "axios";
import { db } from "../../config/index";
import { SAVEWELCOME, SAVEDESIGN, SAVECONTENT } from "../../redux/reducer/actionTypes";

import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";

const Sidebar = ({ handleSlide, Arrow }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state?.authReducer?.currentUser);
  const cardData = useSelector((state) => state?.cardReducer?.data);
  const [sideBarActive, setsideBarActive] = useState(false);
  const uid = useSelector((state) => state.authReducer.currentUser.uid);
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const changeHamburgerColor = () => {
    if (window.scrollY >= 100) {
      setIsWhiteBackground(true);
    } else {
      setIsWhiteBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHamburgerColor);
    return () => {
      window.removeEventListener("scroll", changeHamburgerColor);
    };
  });


 
  return (
    <div className={sideBarActive ? "sidebar active" : "sidebar"}>
      <div
        className={
          isWhiteBackground ? "slideButton blackBtn" : "slideButton whiteBtn"
        }
        onClick={handleSlide}
      >
        <Arrow size={30} />
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Document is submitted successfully"
        key={vertical + horizontal}
      />

      <div className="sidebarHeader">
        <p>{currentUser?.email}</p>
      </div>

      <div className="sidebarContent">
        <NavLink to="/intake" activeClassName="active" className="sidebar_link">
          <div
            className={
              currentRoute.includes("intake")
                ? "sidebar_item active"
                : "sidebar_item"
            }
          >
            <RiInputMethodLine size={24} />
            <p>INTAKE</p>
          </div>
        </NavLink>

        <NavLink to="/design" activeClassName="active" className="sidebar_link">
          <div
            className={
              currentRoute.includes("design")
                ? "sidebar_item active"
                : "sidebar_item"
            }
          >
            <GiPencilBrush size={24} />
            <p>DESIGN</p>
          </div>
        </NavLink>

        <NavLink
          to="/content"
          activeClassName="active"
          className="sidebar_link"
        >
          <div
            className={
              currentRoute.includes("content")
                ? "sidebar_item active"
                : "sidebar_item"
            }
          >
            <RiPagesLine size={24} />
            <p>CONTENT</p>
          </div>
        </NavLink>
      </div>

      {/* <div className="submit">
        <button onClick={handleSubmit}>
          <GiConfirmed size={24} style={{ marginRight: "5px" }} />
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
