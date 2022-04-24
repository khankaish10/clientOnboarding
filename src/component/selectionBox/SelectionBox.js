import React from "react";
import "./SelectionBox.css";

const SelectionBox = ({ box, handleChangeChecked,imgSrc, image}) => {
  return (
    <div className="selectionBox">
      <input
        type="checkbox"
        id={box.id}
        name={box?.name}
        checked={box.isChecked}
        value={box?.id}
        onChange={(e) => handleChangeChecked(e)}
      />
      {
        image ? (
          <div className="designpreferenceImage">
            <img src={imgSrc}  />
          </div>
        ) : (
          <>
          <p className="selectionBoxPara"><span>{box.name.split(":")[0]}:</span>{box.name.split(":")[1]}</p>
          {/* <p>{</p> */}
          </>
        )
      }
    </div>
  );
};

export default SelectionBox;
