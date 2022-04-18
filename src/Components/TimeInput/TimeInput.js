import React from "react";
import "./TimeInput.css";

const TimeInput = ({ input }) => 
    <div style={{fontSize:30}} className='time-input d-flex align-items-center'>
        <div className="d-flex align-items-baseline">
            {input}<span className="hrs">hrs</span>
        </div>
    </div>;

export default TimeInput;