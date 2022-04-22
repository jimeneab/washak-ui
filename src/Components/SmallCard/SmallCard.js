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
   case 'motocicleta': return <Moto width={80}stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'crossover': return <Crossover className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'sedan': return <Sedan className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'hatchback': return <Hatchback className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'suv': return <Suv className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'pickup': return <Pickup className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   case 'van': return <Van className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
   default: return <Sedan className="small-img" stroke={bgColor === "#036" ? "#f3f3f3" : "black"} />;
 }
}

  return(
    <div className="small-card me-4" style={{ "backgroundColor": bgColor}}>
      <p className="small-info" style={{ "color": selectedColor }}>
        {brand} • {model}
      </p>
      <div className="d-flex flex-column align-items-center">
        {getCarType()}
      </div>
    </div>
  )
}

export default SmallCard