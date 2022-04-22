import React from "react"
import Crossover from "../Crossover";
import Moto from "../Motorcicle";
import Suv from "../Suv";
import Sedan from "../Sedan";
import Hatchback from "../Hatchback";
import Pickup from "../Pickup";
import Van from "../Van";
import "./SmallCard.css"

function SmallCard({ type, brand, model,bgColor, selectedColor }){

const getCarType = () => {
 switch(type){
   case 'motocicleta': return <Moto stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'crossover': return <Crossover stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'sedan': return <Sedan stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'hatchback': return <Hatchback stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'suv': return <Suv stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'pickup': return <Pickup stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   case 'van': return <Van stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
   default: return <Sedan stroke={bgColor === "#036" ? "#f3f3f3" : "#036"} />;
 }
}

  return(
    <div className="small-card me-4" style={{ "background-color": bgColor}}>
      <p className="small-info" style={{ "color": selectedColor }}>
        {brand} • {model}
      </p>
      {getCarType()}
    </div>
  )
}

export default SmallCard