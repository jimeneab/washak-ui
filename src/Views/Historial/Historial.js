import {React, useState, useEffect} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import {useNavigate} from 'react-router-dom'
import "./Historial.css"
import CardHistory from "../../Components/CardHistory/CardHistory"
import axios from "axios";

function Historial() {

  const [cardHistory, setCardHistory] = useState()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const config = {headers: {authorization:`${token}`}}

  useEffect(() => {
    const userId = localStorage.getItem('user')
    axios.get(`http://localhost:4000/services/byUser/${userId}`, config)
  .then(res => {
    console.log(res.data.allService)
    setCardHistory(res.data.allService)
  })
  .catch(e => {
    console.log(e)
  })

    const redirectFunction = () => navigate('/login')

    if (!token) {
        redirectFunction()
    }
}, [navigate])

  return(
    <div className="bgimg-1">
      <NavBar />
      <section className='mx-4'>
        <h1 className="title">Historial de servicios</h1>
        {cardHistory && cardHistory.map((card, index) => {
            const {marca, modelo, packageWash, place, hour, month, day} = card
            return (
              <CardHistory
              key={index}
                service={packageWash}
                brand={marca} 
                model={modelo}
                location={place}
                date={`${day}/${month}`}
                time={hour} />
            )
          })
        }
      </section>
    </div>
    )
}

export default Historial