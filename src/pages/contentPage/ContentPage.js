import React, { useState, useEffect } from "react";
import "./ContentPage.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import contentCardDetails from "../../helpers/contentCardDetails";
import Card from "../../component/Card/Card";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { saveCardData } from "../../redux/actions/cardAction";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { db } from "../../config/index";
import { SAVECONTENT } from "../../redux/reducer/actionTypes";
import { NavLink } from "react-router-dom";
import Reminder from "./Reminder";
import Snackbar from "@mui/material/Snackbar";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    height: "fit-content",
    width: "fit-content",
    padding: "0px",
    transform: "translate(-50%, -50%)",
  },
};

const ContentPage = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.authReducer.currentUser.uid);

  const [sidebar, setSideBar] = useState(false);
  const [getDocument, setGetDocument] = useState();
  const [cardValue, setCardValue] = useState({
    content: "",

    AboutPage: "",
    HomePage: "",
    Contact: "",
    MenuPreferences: "",
    ProductsorService: "",
    CustomPages: "",
    DynamicContent: "",

    PersonalClarity: "",
    DynamicContentStrategy: "",
    SocialMedia: "",
    Email_Newsletter: "",

    username: "",
    password: "",
  });
  const [updatedContentCardDetails, setUpdatedContentCardDetails] = useState([
    ...contentCardDetails,
  ]);
  const [selectionState, setSelectionState] = useState(
    contentCardDetails[2].questions[0].selectionBoxes
  );
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const handleChangeChecked = (e) => {
    const tempSelectionState = selectionState.map((item) => {
      return item.name === e.target.name
        ? { ...item, isChecked: e.target.checked }
        : item;
    });
    setSelectionState(tempSelectionState);
  };

  const handleChange = (e) => {
    setCardValue({
      ...cardValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleVideoPopup = (id) => {
    setModalIsOpen(true);
    let videolink = contentCardDetails.find((card) => card.id === id).videoLink;
    setVideoLink(videolink);
  };

  const handleFinish = () => {
    dispatch({
      type: SAVECONTENT,
      payload: { ...cardValue, accountAccess: selectionState },
    });
    setModalIsOpen(true);
  };

  const handleSave = (id) => {
    dispatch(
      saveCardData({ ...cardValue, accountAccess: selectionState }, uid)
    );
    setState({ ...state, open: true });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);

    const ID = ++id;
    const temp = updatedContentCardDetails.map((item) => {
      if (item.id === ID) {
        return { ...item, isVisible: true };
      }
      return item;
    });
    setUpdatedContentCardDetails(temp);
  };

  const handleSlide = () => {
    setSideBar(!sidebar);
    const slideButton = document.querySelector(".slideButton");
    const sidebarContainer = document.querySelector(".sidebarContainer");

    const screenWidth = window.innerWidth;
    if (sidebar == false) {
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

  useEffect(() => {
    const docRef = db.collection("card").doc(uid);
    docRef.onSnapshot((docSnap) => {
      if (docSnap.exists) {
        // console.log(docSnap.data().data?.content)
        setGetDocument(docSnap.data().data?.content);
      } else {
        console.log("no docs");
      }
    });
  }, []);

  useEffect(() => {
    if (getDocument) {
      setSelectionState(getDocument.accountAccess);
      delete getDocument.accountAccess;
      setCardValue({ content: "", ...getDocument });
    }
  }, [getDocument]);
  return (
    <div className="home">
      <div className={sidebar ? "sidebarContainer active" : "sidebarContainer"}>
        <Sidebar
          handleSlide={handleSlide}
          Arrow={sidebar ? GiHamburgerMenu : AiOutlineClose}
        />
      </div>
      <div className="homeBody">
        <Navbar />
        <p
          id={"intakeFirstPara"}
          className={
            sidebar
              ? "cardContainer intakeUpperText"
              : "cardContainer intakeUpperText active"
          }
          style={{ padding: "5px" }}
        >
          In order to build out your content, we need a little more information
          to make sure your brand message is clear and your clients can find and
          connect with your message and have their needs met.
        </p>
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
              setVideoLink("");
            }}
            style={
              videoLink
                ? customStyles
                : {
                    content: {
                      top: "50%",
                      left: "50%",
                      height: "fit-content",
                      width: "fit-content",
                      padding: "20px",
                      // background: "#000",
                      // color: "#fff",
                      transform: "translate(-50%, -50%)",
                    },
                  }
            }
            contentLabel="calendar"
            ariaHideApp={false}
          >
            {videoLink ? (
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
            ) : (
              <Reminder />
            )}
          </Modal>

          {updatedContentCardDetails?.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                handleSave={handleSave}
                handleChange={handleChange}
                cardValue={cardValue}
                handleVideoPopup={handleVideoPopup}
                selectionState={selectionState}
                handleChangeChecked={handleChangeChecked}
              />
            );
          })}

          <div
            className={
              sidebar
                ? "nextButtonContainer  nextButton"
                : "nextButtonContainer active nextButton"
            }
            onClick={handleFinish}
          >
            Finish
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
