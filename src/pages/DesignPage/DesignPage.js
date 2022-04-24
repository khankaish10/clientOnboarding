import React, { useState, useEffect } from "react";
import "./WebdesignPage.css";
import Sidebar from "../../component/Sidebar/Sidebar";
import Navbar from "../../component/Navbar/Navbar";
import Modal from "react-modal";
import Card from "../../component/Card/Card";
import designCardDetails from "../../helpers/designCardDetails";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { saveCardData } from "../../redux/actions/cardAction";
import { storage } from "../../config/index";
import { db } from "../../config/index";
import { NavLink } from "react-router-dom";
import { SAVEDESIGN } from "../../redux/reducer/actionTypes";
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

const DesignPage = () => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.authReducer.currentUser.uid);
  const [sidebar, setSideBar] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [cardValue, setCardValue] = useState({
    design: "",
    typeface: "",
    feelandmood: "",
  });
  const [updateDesignPreference, setUpdateDesignPreference] = useState([
    ...designCardDetails,
  ]);
  const [designPreference, setDesignPreference] = useState(
    designCardDetails[0].questions[0].selectionBoxes
  );
  const [rangeSlider, setRangeSlider] = useState(
    designCardDetails[1].questions[0].slider
  );
  const [inputColor, setInputColor] = useState("#1d4a8c");
  const [color, setColor] = useState(inputColor);
  const [images, setImages] = useState([]);
  const [websiteUrls, setWebsiteUrls] = useState([]);
  const [uploadAssetsUrls, setUploadAssetsUrls] = useState([]);
  const [websiteImageProgress, setWebsiteImageProgress] = useState(0);
  const [uploadAssetsProgress, setUploadAssetsProgress] = useState(0);
  const [getDocument, setGetDocument] = useState();
  const [isDelete, setIsDelete] = useState(false);

  // slider state
  const [slider, setSlider] = useState({
    classic: getDocument?.slider?.classic || 3,
    mature: getDocument?.slider?.mature || 1,
    feminine: getDocument?.slider?.feminine || 0,
    playful: getDocument?.slider?.playful || 1,
    economical: getDocument?.slider?.economical || 0,
    geometric: getDocument?.slider?.geometric || 1,
    abstract: getDocument?.slider?.abstract || 0,
  });

  const [options, setOptions] = useState("monochromatic");
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    const screensize = window.innerWidth;
    if (screensize <= 768) {
      setSideBar(true);
      const slideButton = document.querySelector(".slideButton");

      slideButton.style.position = "fixed";
      slideButton.style.top = "2vh";
      slideButton.style.left = "10px";
      slideButton.style.width = "30px";
    }
  }, []);

  useEffect(() => {
    const docRef = db.collection("card").doc(uid);
    docRef.onSnapshot((docSnap) => {
      if (docSnap.exists) {
        setGetDocument(docSnap.data().data?.design);
      } else {
        console.log("no docs");
      }
    });
  }, []);

  useEffect(() => {
    if (getDocument) {
      // console.log("getDocument: ", getDocument)
      setDesignPreference(getDocument?.designPreference);
      setWebsiteUrls(getDocument.websiteUrls);
      setUploadAssetsUrls(getDocument.uploadAssetsUrls);
      setInputColor(getDocument.color);

      setOptions(getDocument.options);
      setCardValue({
        design: "",
        typeface: getDocument.typeface,
        feelandmood: getDocument.feelandmood,
      });

      setSlider({ ...getDocument?.slider });
    }
  }, [getDocument]);

  useEffect(() => {
    setColor(inputColor);
  }, [inputColor]);

  useEffect(() => {
    if (isDelete) {
      handleSave();
    }
  }, [isDelete]);
  const handleOptions = (e) => {
    setOptions(e.target.value);
  };

  const handleDesignPreferenceChange = (e) => {
    const tempDesignPreferenceState = designPreference.map((item) => {
      return item.name === e.target.name
        ? { ...item, isChecked: e.target.checked }
        : item;
    });
    setDesignPreference(tempDesignPreferenceState);
  };

  const handleChange = (e) => {
    setCardValue({
      ...cardValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSliderChange = (value, name) => {
    setSlider({ ...slider, [name]: value });
  };

  const handleSave = (id) => {
    let cardData = {
      ...cardValue,
      designPreference,
      color: inputColor,
      websiteUrls,
      uploadAssetsUrls,
      slider,
      options,
    };
    dispatch(saveCardData(cardData, uid));
    setState({ ...state, open: true });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 2000);

    const ID = ++id;
    const temp = updateDesignPreference.map((item) => {
      if (item.id === ID) {
        return { ...item, isVisible: true };
      }
      return item;
    });
    setUpdateDesignPreference(temp);
  };

  const handleInputColorChange = (e) => {
    setInputColor(e.target.value);
    setColor(inputColor);
  };

  const handleBackgroundChange = (color) => {
    setInputColor(color.hex);
    setColor(inputColor);
  };

  const handleVideoPopup = (id) => {
    setModalIsOpen(true);

    let videolink = designCardDetails.find((card) => card.id === id).videoLink;
    setVideoLink(videolink);
  };

  const handleSlide = () => {
    setSideBar(!sidebar);
    const slideButton = document.querySelector(".slideButton");
    const sidebarContainer = document.querySelector(".sidebarContainer");

    if (sidebar === false) {
      slideButton.style.position = "fixed";
      slideButton.style.top = "2vh";
      slideButton.style.left = "10px";
      slideButton.style.width = "30px";
    } else {
      slideButton.style.position = "absolute";
      slideButton.style.top = "2vh";
      slideButton.style.left = sidebarContainer.offsetWidth + "px";
    }
  };

  const onImagesChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newFile = e.target.files[i];
      newFile["id"] = Math.random();
      setImages((prevState) => [...prevState, newFile]);
    }
  };
  const handleDeleteImage = (e, url) => {
    const tempUrl = url.split("/");
    const imgURL = tempUrl[7].split("%2F")[2].split("?")[0];

    const subFolder =
      e.target.id === "websiteImages" ? "websiteImages" : "uploadAssets";

    let tempImages =
      subFolder === "websiteImages"
        ? websiteUrls.filter((image) => image !== url)
        : uploadAssetsUrls.filter((image) => image !== url);

    subFolder === "websiteImages"
      ? setWebsiteUrls(tempImages)
      : setUploadAssetsUrls(tempImages);

    var storageRef = storage.ref();
    var desertRef = storageRef.child(`${uid}/${subFolder}/${imgURL}`);
    // Delete the file
    desertRef
      .delete()
      .then(() => {
        setIsDelete(true);
        setState({ ...state, open: true });
        setTimeout(() => {
          setState({ ...state, open: false });
        }, 2000);
        setIsDelete(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUploadImages = (e) => {
    e.preventDefault();

    const subFolder =
      e.target.id === "websiteImages" ? "websiteImages" : "uploadAssets";

    const promises = [];
    images.map((image) => {
      const uploadTask = storage
        .ref(`${uid}/${subFolder}/${image.name}`)
        .put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          if (e.target.id === "websiteImages") {
            setWebsiteImageProgress(progress);
          } else {
            setUploadAssetsProgress(progress);
          }
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref(`${uid}`)
            .child(`${subFolder}/${image.name}`)
            .getDownloadURL()
            .then((urls) => {
              setImages([]);
              if (subFolder === "websiteImages") {
                setWebsiteUrls((prevState) => [...prevState, urls]);
              } else {
                setUploadAssetsUrls((prevState) => [...prevState, urls]);
              }
              setWebsiteImageProgress(0);
              setUploadAssetsProgress(0);
            });
        }
      );
    });
    Promise.all(promises)
      .then(
        () => setState({ ...state, open: true }),
        setTimeout(() => {
          setState({ ...state, open: false });
        }, 2000)
      )
      .catch((err) => console.log(err));
  };

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
            style={customStyles}
            contentLabel="calendar"
            ariaHideApp={false}
          >
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

          {updateDesignPreference.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                handleSave={handleSave}
                // handleChange={handleDesignPreferenceChange}
                cardValue={cardValue}
                handleVideoPopup={handleVideoPopup}
                designPreference={designPreference}
                handleDesignPreferenceChange={handleDesignPreferenceChange}
                rangeSlider={rangeSlider}
                handleSliderChange={handleSliderChange}
                color={color}
                handleBackgroundChange={handleBackgroundChange}
                handleInputColorChange={handleInputColorChange}
                inputColor={inputColor}
                handleChange={handleChange}
                onImagesChange={onImagesChange}
                images={images}
                handleUploadImages={handleUploadImages}
                handleDeleteImage={handleDeleteImage}
                websiteImageProgress={websiteImageProgress}
                uploadAssetsProgress={uploadAssetsProgress}
                uploadAssetsUrls={uploadAssetsUrls}
                websiteUrls={websiteUrls}
                slider={slider}
                options={options}
                handleOptions={handleOptions}
              />
            );
          })}

          <NavLink to="/content" style={{ textDecoration: "none" }}>
            <div
              className={
                sidebar
                  ? "nextButtonContainer  nextButton"
                  : "nextButtonContainer active nextButton"
              }
              onClick={() =>
                dispatch({
                  type: SAVEDESIGN,
                  payload: {
                    ...cardValue,
                    designPreference,
                    color: inputColor,
                    websiteUrls,
                    uploadAssetsUrls,
                    slider,
                    options,
                  },
                })
              }
            >
              Next
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
