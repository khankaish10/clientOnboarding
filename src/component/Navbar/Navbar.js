

import React from "react";
import "./Navbar.css";
import {useHistory} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import { useDispatch } from "react-redux";
import {logout} from '../../redux/actions/auth'

const Navbar = ({onSubmitHandler}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = async() => {
    try {
      dispatch(logout(history))
    } catch (error) {
      console.log(error)
    }
 }


  return (
    <div className="navbar">
        <p>Client Onboarding</p>
        {/* <div className="logout"> */}
        <button onClick={handleLogout}><FiLogOut size={24} style={{marginRight: '5px'}}/>Logout</button>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
