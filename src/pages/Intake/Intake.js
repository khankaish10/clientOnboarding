import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Sidebar from "../../component/Sidebar/Sidebar";
import "./Home.css";
import Card from "../../component/Card/Card";
import welcomeCardDetails from "../../helpers/welcomeCardDetails";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import Snackbar from '@mui/material/Snackbar';



import Modal from "react-modal";
import { db } from "../../config/index";
import {
  modifiedGetDocument,
  saveCardData,
} from "../../redux/actions/cardAction";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { SAVEWELCOME } from "../../redux/reducer/actionTypes";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "fit-content",
    width: "fit-content",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    transition: "all 0.5s ease-in",
  },
};

const Intake = ({isWhiteBackground}) => {
  

  const dispatch = useDispatch();
  const uid = useSelector((state) => state.authReducer.currentUser.uid);
  const firebaseData = useSelector((state) => state.cardReducer.data);
  const [sidebar, setSideBar] = useState(false);
  const [isCalendar, setIsCalendar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [defaultCalenderValue, setDefaultCalenderValue] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  });
  const [selectedDay, setSelectedDay] = useState(defaultCalenderValue);
  const [getDocument, setGetDocument] = useState();
  const [cardValue, setCardValue] = useState({
    welcome: "",

    desiredproject: "",
    businessname: "",
    businessnamelogo: "",
    slogan: "",
    threeword: "",
    businessaddress: "",
    phone: "",
    email: "",
    linktosocialmedia: "",
    whatyourorganization: "",
    targetaudience: "",
    aboutindustry: "",
    prevailingwisdom: "",
    corevalue: "",
    life: "",
  });
  const [updatedWelcomeCardDetails, setUpdatedWelcomeCardDetails] = useState([
    ...welcomeCardDetails,
  ]);
  const [videoLink, setVideoLink] = useState("");
  const [drivingNeedTopTwo, setDrivingNeedTopTwo] = useState(
    welcomeCardDetails[3].questions[1].selectionBoxes
  );
  const [drivingNeedTopThree, setDrivingNeedTopThree] = useState(
    welcomeCardDetails[3].questions[1].selectionBoxes
  );
  const [isActive, setIsActive] = useState(false);

  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };


  //handling checkbox changes
  const handleDrivingNeedTopTwoChange = (e) => {
    const tempDrivingNeedTopTwo = drivingNeedTopTwo.map((item) => {
      return item.name === e.target.name
        ? { ...item, isChecked: e.target.checked }
        : item;
    });
    setDrivingNeedTopTwo(tempDrivingNeedTopTwo);
  };
  const handleDrivingNeedTopThreeChange = (e) => {
    const tempDrivingNeedTopThree = drivingNeedTopThree.map((item) => {
      return item.name === e.target.name
        ? { ...item, isChecked: e.target.checked }
        : item;
    });
    setDrivingNeedTopThree(tempDrivingNeedTopThree);
  };

  // handling card values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardValue({
      ...cardValue,
      [name]: value,
    });
  };

  // calendar
  const handleCalendar = (name) => {
    if (name === "calendar") {
      setIsCalendar(true);
    }
    setModalIsOpen(true);
  };

  //video popup
  const handleVideoPopup = (id) => {
    setModalIsOpen(true);
    let videolink = welcomeCardDetails.find((card) => card.id === id).videoLink;
    setVideoLink(videolink);
  };

  //save card content
  const handleSave = (id) => {
    dispatch(
      saveCardData(
        { ...cardValue, selectedDay, drivingNeedTopTwo, drivingNeedTopThree },
        uid
      )
    );
    // alert("Saved");
    setState({ ...state, open: true });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);
    // const tempID = id;
    const ID = id + 1;
    const temp = updatedWelcomeCardDetails.map((item) => {
      if(item.id === ID) {
        return {...item, isVisible: true};
      } 
      return item;
    });
    // const temp = temp1.map((item) => {
    //   if(item.id === tempID) {
    //     return {...item, isVisible: false};
    //   } 
    //   return item;  
    // });

    setUpdatedWelcomeCardDetails(temp);
  };

  useEffect(() => {
    const docRef = db.collection("card").doc(uid);
    docRef.onSnapshot((docSnap) => {
      if (docSnap.exists) {
        setGetDocument(docSnap.data().data?.welcome);
      } else {
        console.log("no docs");
      }
    });
  }, []);

  useEffect(() => {
    if (getDocument) {
      setSelectedDay(getDocument.selectedDay);
      setDrivingNeedTopTwo(getDocument.drivingNeedTopTwo);
      setDrivingNeedTopThree(getDocument.drivingNeedTopThree);

      // modifying getDocument
      const modifiedDocument = modifiedGetDocument(getDocument);
      setCardValue({ welcome: "", ...modifiedDocument });
    }
  }, [getDocument]);

  useEffect(() => {
    const screensize = window.innerWidth;
    if (screensize <= 768) {
      setSideBar(true);
      const slideButton = document.querySelector(".slideButton");
   
      slideButton.style.position = "fixed";
      slideButton.style.top = "2vh";
      slideButton.style.left = "20px";
      slideButton.style.width = "30px";
    }


  }, []);

  const handleActiveState = (e) => {
    if (e.target.id === "homeBody" || e.target.id === "cardContainer") {
      setIsActive(!isActive);
      dispatch({
        type: "ISACTIVE",
        payload: isActive,
      });
    }
  };

  const handleSlide = () => {
    setSideBar(!sidebar);
    const slideButton = document.querySelector(".slideButton");
    const sidebarContainer = document.querySelector(".sidebarContainer");
    if (sidebar === false) {
      slideButton.style.position = "fixed";
      slideButton.style.top = "2vh";
      slideButton.style.left = "20px";
      slideButton.style.width = "30px";
    } else {
      slideButton.style.position = "absolute";
      slideButton.style.top = "2vh";
      slideButton.style.left = sidebarContainer.offsetWidth + "px";
    }
  };
  return (
    <div className="home">
      <div className={sidebar ? "sidebarContainer active" : "sidebarContainer"}>
        <Sidebar
          handleSlide={handleSlide}
          Arrow={sidebar ? GiHamburgerMenu : AiOutlineClose}
        />
      </div>
      <div
        className="homeBody"
        id="homeBody"
        onClick={(e) => handleActiveState(e)}
      >
        <Navbar />
        <p id = {"intakeFirstPara"} className={sidebar ? "cardContainer intakeUpperText" : "cardContainer intakeUpperText active"} style={{padding:'5px'}}>Welcome! We're so excited to be working with you and cannot wait to dig into your brand! To help us curate your desired brand voice and design, we need to collect a good bit of information. Please read each question and watch the corresponding video to help you provide us with solid information. As outlined in your contract, each question may have requirements and they must be met to be scheduled in the design queue.</p>
        <p className={sidebar ? "cardContainer intakeUpperText" : "cardContainer intakeUpperText active"} style={{padding:'5px'}}>We want to prepare you for a successful experience and we need a solid understanding of your function as a business and person to build a dynamic brand for you. You can save this document to work on its stages to have time to deliver intentional responses.</p>
        <div
          className={sidebar ? "cardContainer" : "cardContainer active"}
          id="cardContainer"
        >
          <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="Document Saved Successfully"
        key={vertical + horizontal}
      />




          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => setModalIsOpen(true)}
            onRequestClose={() => {
              setModalIsOpen(false);
              setIsCalendar(false);
              setVideoLink("");
            }}
            style={customStyles}
            contentLabel="calendar"
            ariaHideApp={false}
            // className="Modal"
          >
            {isCalendar && (
              <Calendar
                value={selectedDay}
                onChange={setSelectedDay}
                colorPrimary="#9c88ff" // added this
                calendarClassName="custom-calendar" // and this
                calendarTodayClassName="custom-today-day" // also this
                shouldHighlightWeekends
              />
            )}
            {videoLink && (
              <iframe
                width="560"
                height="315"
                src={`${videoLink}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="video"
              ></iframe>
            )}
          </Modal>

          

          {updatedWelcomeCardDetails?.map((card) => {
            
              return (  
                <Card
                card={card}
                key={card.id}
                handleCalendar={handleCalendar}
                handleSave={handleSave}
                selectedDay={selectedDay}
                handleChange={handleChange}
                cardValue={cardValue}
                handleVideoPopup={handleVideoPopup}
                handleDrivingNeedTopTwoChange={handleDrivingNeedTopTwoChange}
                handleDrivingNeedTopThreeChange={
                  handleDrivingNeedTopThreeChange
                }
                drivingNeedTopTwo={drivingNeedTopTwo}
                drivingNeedTopThree={drivingNeedTopThree}

                // inActive={inActive}
              />
              )
          })}
          
          <NavLink
            style={{textDecoration:'none'}}
            to="/design"
          >
          <div className={sidebar ?  "nextButtonContainer  nextButton" : "nextButtonContainer active nextButton"} 
              onClick={()=> dispatch({type: SAVEWELCOME, payload: { ...cardValue, selectedDay, drivingNeedTopTwo, drivingNeedTopThree }})}
          >
            Next
          </div>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Intake;
