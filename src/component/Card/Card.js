import React, { useEffect, useState } from "react";
import "./styles.css";
import "autoheight-textarea";

import CardHeader from "../CardHeader/CardHeader";
import { FcCalendar } from "react-icons/fc";
import SelectionBox from "../selectionBox/SelectionBox";

import { SwatchesPicker } from "react-color";
import LinearProgress from "@mui/material/LinearProgress";
import RangeSlider from "../RangeSlider";
import { allSwatchColors } from "../../helpers/designCardDetails";
import { TiDelete } from "react-icons/ti";

const CheckBoxArray = ({
  checkBoxData,
  handleChangeChecked,
  isContent,
  isDrivingNeedTwo,
  isDrivingNeedThree,
  image,
}) => {
  return (
    <>
      {!isContent && checkBoxData && (
        <p
          style={{ fontSize: "14px", fontWeight: "700", marginBottom: "10px" }}
        >
          {isDrivingNeedTwo
            ? "Choose your top two:"
            : isDrivingNeedThree
            ? "Choose your customer's top three:"
            : null}
        </p>
      )}
      {checkBoxData?.map((box) => (
        <div
          key={box.id}
          style={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 3px rgba(0,0,0,0.3)",
            width: image && "50%",
            marginBottom: "10px",
            padding: "2px",
          }}
        >
          <SelectionBox
            box={box}
            handleChangeChecked={handleChangeChecked}
            imgSrc={box.url}
            image={image}
          />
        </div>
      ))}
    </>
  );
};

const Card = ({
  card,
  handleCalendar,
  selectedDay,
  handleSave,
  handleChange,
  cardValue,
  handleVideoPopup,
  handleChangeChecked,
  handleDrivingNeedTopTwoChange,
  handleDrivingNeedTopThreeChange,
  selectionState,
  drivingNeedTopTwo,
  drivingNeedTopThree,
  designPreference,
  handleDesignPreferenceChange,
  rangeSlider,
  handleSliderChange,
  inActive,
  color,
  handleBackgroundChange,
  handleInputColorChange,
  inputColor,
  onImagesChange,
  handleUploadImages,
  handleDeleteImage,
  websiteImageProgress,
  uploadAssetsProgress,
  images,
  uploadAssetsUrls,
  websiteUrls,
  slider,
  handleOptions,
  options,
}) => {
  const [activeCard, setActiveCard] = useState(false);
  const [isColorPicker, setIsColorPicker] = useState(true);

  const cardClicked = (id) => {
    // setActiveCard(true);
  };
  // useEffect(() => {
  //   if(card?.id === 1 || card?.id === 11 || card?.id === 21){
  //     setActiveCard(true);
  //   }
  // })

  return (
    <>
      <div id="card" onClick={() => cardClicked(card?.id)}>
        <CardHeader
          heading={card.cardHeading}
          id={card.id}
          handleVideoPopup={handleVideoPopup}
          Icon={card?.Icon}
        />
        {card?.isVisible && (
          <>
            <div className="cardContent">
              {card.videoText && <p>{card.videoText}</p>}

              {card.questions &&
                card.questions.map((item) => {
                  return (
                    <div key={item.id} className="cardItem">
                      <p>{item.q}</p>
                      {card.id !== 1 &&
                        item.id !== 1016 &&
                        item.id !== 2001 &&
                        item.id !== 2002 &&
                        item.id !== 2003 &&
                        item.id !== 3012 &&
                        item.id !== 2006 &&
                        item.id !== 2004 &&
                        item.id !== 2007 && (
                          <autoheight-textarea>
                            <textarea
                              // onClick={cardInActive}
                              className={
                                item.id === 3014 ? "passwordText" : "normalText"
                              }
                              name={item.name}
                              value={cardValue[item.value]}
                              placeholder={item.placeholder}
                              onChange={handleChange}
                              // row={5}
                            />
                          </autoheight-textarea>
                        )}
                      {card.requirement && (
                        <p style={{ fontSize: "14px", color: "#000" }}>
                          {card.requirement.split(":")[0]}:
                          <span style={{ fontStyle: "italic", color: "red" }}>
                            {card.requirement.split(":")[1]}{" "}
                          </span>
                        </p>
                      )}
                      {/* selection boxes----------------- */}
                      {item.selectionBoxes && (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: item.id === 2001 ? "row" : "column",
                            flexWrap: item.id === 2001 ? "wrap" : null,
                            justifyContent: item.id === 2001 && "center",
                          }}
                        >
                          {/* intake--- driving need top two */}
                          <CheckBoxArray
                            checkBoxData={drivingNeedTopTwo}
                            handleChangeChecked={handleDrivingNeedTopTwoChange}
                            isDrivingNeedTwo
                          />

                          {/* intake--- driving need customer's top three */}
                          <CheckBoxArray
                            checkBoxData={drivingNeedTopThree}
                            handleChangeChecked={
                              handleDrivingNeedTopThreeChange
                            }
                            isDrivingNeedThree
                          />

                          {/* content */}
                          <CheckBoxArray
                            checkBoxData={selectionState}
                            handleChangeChecked={handleChangeChecked}
                            isContent
                          />

                          {/* design  */}
                          <CheckBoxArray
                            checkBoxData={designPreference}
                            handleChangeChecked={handleDesignPreferenceChange}
                            image="image"
                          />
                        </div>
                      )}

                      {/* range slider */}
                      {item.slider && (
                        <div className="slider">
                          {rangeSlider.map((data) => (
                            <div key={data.id} name={data.name}>
                              <RangeSlider
                                data={data}
                                slider={slider}
                                handleSliderChange={handleSliderChange}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

              {card?.id === 1 && (
                <div className="calendar">
                  <p>{`${selectedDay?.day}/${selectedDay?.month}/${selectedDay?.year}`}</p>
                  <FcCalendar
                    onClick={() => handleCalendar("calendar")}
                    size={25}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}

              {/* color picker */}
              {card.id === 13 && (
                <div className="colorPickerCard">
                  <div className="colorPickerInputContainer">
                    <input
                      type="text"
                      name="inputColor"
                      value={inputColor}
                      placeholder="#ffffff"
                      onChange={handleInputColorChange}
                    />
                    <div
                      style={{ background: `${color}` }}
                      className="colorPickerBtn"
                      onClick={() => setIsColorPicker(!isColorPicker)}
                    ></div>

                    <select
                      onChange={handleOptions}
                      value={options}
                      style={{ marginLeft: "20px", height: "30px" }}
                    >
                      <option value="" selected="selected" hidden="hidden">
                        Please Pick One
                      </option>
                      {card?.questions[1]?.selectOptions.map((item) => {
                        return (
                          <option key={item.id} value={item?.option}>
                            {item?.option}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <SwatchesPicker
                    // className={isColorPicker ? 'sketchPicker hideColor': 'sketchPicker'}
                    // disableAlpha={true}
                    width={"100%"}
                    colors={allSwatchColors}
                    // color={color}
                    onChangeComplete={handleBackgroundChange}
                  />
                </div>
              )}

              {/* images uploads*/}
              {(card.id === 16 || card.id === 17) && (
                <div className="websiteImageUploadContainer">
                  <div className="imageUploads">
                    <form>
                      <label
                        htmlFor="filePicker"
                        style={{
                          background: "grey",
                          padding: "5px 10px",
                          cursor: "pointer",
                          color: "#fff",
                        }}
                      >
                        Upload Files
                      </label>
                      <input
                        id="filePicker"
                        multiple
                        onChange={onImagesChange}
                        style={{ visibility: "hidden" }}
                        type={"file"}
                      />

                      {card.id === 16
                        ? websiteImageProgress !== 0 && (
                            <LinearProgress
                              className="linearProgress"
                              variant="determinate"
                              value={websiteImageProgress}
                            />
                          )
                        : uploadAssetsProgress !== 0 && (
                            <LinearProgress
                              className="linearProgress"
                              variant="determinate"
                              value={uploadAssetsProgress}
                            />
                          )}
                      {images.length > 0 && (
                        <button
                          id={card.id === 16 ? "websiteImages" : "uploadAssets"}
                          onClick={handleUploadImages}
                        >
                          Click to Upload
                        </button>
                      )}
                    </form>
                    <div className="imageUploadsContainer">
                      {card.id === 16
                        ? websiteUrls.map((image, index) => (
                            <div key={index} className="imageUploadsItem">
                              <TiDelete
                                size={24}
                                className="deleteImage"
                                onClick={(e) => handleDeleteImage(e, image)}
                                id="websiteImages"
                              />

                              <img src={image} alt="websiteUrls" />
                            </div>
                          ))
                        : uploadAssetsUrls.map((image, index) => (
                            <div key={index} className="imageUploadsItem">
                              <TiDelete
                                size={24}
                                className="deleteImage"
                                onClick={(e) => handleDeleteImage(e, image)}
                                id="uploadAssets"
                              />

                              <img src={image} alt="uploadAssetsUrl" />
                            </div>
                          ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={activeCard ? "save active" : "save"}>
              <button onClick={() => handleSave(card?.id)}>Save</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Card;
