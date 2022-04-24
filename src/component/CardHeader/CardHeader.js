import React from "react";
import "./Cardheader.css";

import { Tooltip } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";


const CardHeader = ({
  Icon,
  title,
  openModal,
  heading,
  id,
  handleVideoPopup,
}) => {
  // let Symbol = iconFinder(Icon);
  return (
    <div className="cardHeader">
      <div className="headingLeft">
        <Icon
          fontSize="25"
          style={{
            marginLeft: '10px'
          }}
        />
        <h4>{heading}</h4>
      </div>
      <div className="cardPlayer" onClick={() => handleVideoPopup(id)}>
        <Tooltip title="Play video" arrow className="tooltip">
          <PlayCircleFilledIcon fontSize="large" />
        </Tooltip>
      </div>
    </div>
  );
};

export default CardHeader;
