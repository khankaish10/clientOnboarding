import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ContentPage.css";

import axios from "axios";
import { db } from "../../config/index";
import {
  SAVEWELCOME,
  SAVEDESIGN,
  SAVECONTENT,
} from "../../redux/reducer/actionTypes.js";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";

const Reminder = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state?.cardReducer?.data);
  const uid = useSelector((state) => state.authReducer.currentUser.uid);

  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const filteredCardData = (data) => {
    let temp = [];
    let k = 0;
    if (data) {
      for (let i = 0; i < data?.length; i++) {
        if (data[i]?.isChecked === true) {
          temp[k++] = { name: data[i]?.name };
        } else {
          continue;
        }
      }
      return temp;
    } else {
      return [];
    }
  };

  const handleSubmit = () => {
    if (!cardData) {
      return alert("Please fill all the fields before submitting.");
    }
    if (cardData?.design == null) {
      return alert("Design section is empty.");
    }
    if (cardData.content == null) {
      return alert("Content section is empty.");
    }
    const tempCardData = { ...cardData };
    let tempDrivingNeedTopTwo = filteredCardData(
      tempCardData?.welcome?.drivingNeedTopTwo
    );
    let tempDrivingNeedTopThree = filteredCardData(
      tempCardData?.welcome?.drivingNeedTopThree
    );

    tempCardData["welcome"].drivingNeedTopThree = tempDrivingNeedTopThree;
    tempCardData["welcome"].drivingNeedTopTwo = tempDrivingNeedTopTwo;

    let tempDesignPreference = filteredCardData(
      tempCardData?.design?.designPreference
    );
    tempCardData["design"].designPreference = tempDesignPreference;

    let tempAccountAccess = filteredCardData(
      tempCardData?.content?.accountAccess
    );
    tempCardData["content"].accountAccess = tempAccountAccess;

    try {
      axios
        .post("https://synergybrandworks.herokuapp.com/submit", cardData)
        .then(function (response) {
          setState({ ...state, open: true });
          setTimeout(() => {
            setState({ ...state, open: false });
          }, 2000);
          finalDelete();
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const finalDelete = () => {
    db.collection("card")
      .doc(`${uid}`)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");

        dispatch({
          type: SAVEWELCOME,
          payload: null,
        });

        dispatch({
          type: SAVEDESIGN,
          payload: null,
        });

        dispatch({
          type: SAVECONTENT,
          payload: null,
        });
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div className="Reminder">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Document is submitted successfully"
        key={vertical + horizontal}
      />
      <p>Do you want to review your form before submitting?</p>
      <div>
        <NavLink to="/Intake">
          <button className="yesBtn">Yes</button>
        </NavLink>
        <NavLink to="/Intake">
          <button className="submitAnyway" onClick={handleSubmit}>
            submit anyway
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Reminder;
