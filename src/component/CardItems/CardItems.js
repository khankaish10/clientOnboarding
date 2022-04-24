import React from "react";
import "./CardItems.css";

const CardItems = ({ item }) => {
  return (
    <div className="cardItems">
      <p style={{ fontWeight: "700" }} key={Math.random(1000)}>
        {item.q}
      </p>
      <textarea type="text" placeholder={item.placeholder} />
    </div>
  );
};

export default CardItems;
