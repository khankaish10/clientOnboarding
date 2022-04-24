import React, {useState, useEffect} from "react";
import Slider from "@material-ui/core/Slider";

const RangeSlider = ({data, slider, handleSliderChange}) => {

  const [rangeValue, setRangeValue] = useState( slider[data?.name]);
  
  const handleChangeslider = (e, value, name) => {
    setRangeValue(value);
    handleSliderChange(value, name);

  }

  useEffect(()=>{
    setRangeValue(slider[data?.name]);
  },[slider])

  return (
    <div>
      <Slider
      value={rangeValue}
        // defaultValue={rangeValue}
        onChange={(e, value) => handleChangeslider(e, value, data?.name)}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="auto"
        marks={[
          { value: 0, label: `${data.from}` },
          { value: 10, label: `${data.to}`},
        ]}
        min={0}
        max={10}    
      />
    </div>
  );
};

export default RangeSlider;
