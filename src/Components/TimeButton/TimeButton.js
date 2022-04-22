import React from "react";
import "./TimeButton.css";

function TimeButton(props) {
  
  return (
    <div
      className="time-button m-2 me-0"
      onClick={()=> props.manejarClick(props.children)}
    >
      <p>{props.children}</p>
      {props.isAm == "am" ? <p>am</p> : <p>pm</p>}
    </div>
  )
}

export default TimeButton