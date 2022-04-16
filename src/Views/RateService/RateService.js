import { React, useState } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import Button from "../../Components/Button/Button"
import "./RateService.css"
import { Star } from "react-feather"
import api from "../../lib/api"

const colors = {
  yellow: "#EFD65B",
  grey: "#cccccc"
}

function RateService({ service, idService}){

  const stars = Array(5).fill(0)
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const [inputRateObj, setInputRateObj] = useState({})

  const handleClick = value => setCurrentValue(value)

  const handleHover = value => setHoverValue(value)

  const handleNoHover = value => setHoverValue(undefined)

  const inputRate = event => {
    const comment = event.target.value
    const range = currentValue
    setInputRateObj({comment,range})
  }

  const buttonRate = async () => {
    const result = await api.saveRateService(inputRateObj)
    console.log(result)
  }
  
  return(
    <div className="bgimg-1">
      <NavBar />
      <section className="mx-4">
        <h1 className="title">
          Danos tu opinión
        </h1>
        <div className="rate-card d-flex align-items-center">
          <img 
            src='https://picsum.photos/seed/picsum/200/200'
            alt='washer img'
            className='rounded-circle washer-pic' />
            <div className="rate-info">
              <p>Premium{service}</p>
              <p>Servicio: {idService}</p>
              <div className="rate-stars">
                {stars.map((item,index) => {
                  return(
                    <Star 
                      key={index} 
                      className="me-1 rate-star"
                      stroke={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                      fill={(hoverValue || currentValue) > index ? colors.yellow : colors.grey}
                      onClick={() => handleClick (index + 1)}
                      onMouseOver={() => handleHover(index + 1)}
                      onMouseLeave={handleNoHover}/>
                  )
                })}
              </div>
            </div>
        </div>
        <textarea id="rate-comments" rows="5" placeholder="Déjanos tus comentarios" onChange={inputRate}/>
        <Button color="primary" width="large" onClick={buttonRate}>Enviar</Button>
        <button color={'primary'} width={'large'} onClick={buttonRate}>Enviar</button>
      </section>
    </div>
  )
}

export default RateService