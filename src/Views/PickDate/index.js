import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { ArrowLeft } from 'react-feather'
import './index.css'
import "react-datepicker/dist/react-datepicker.css";
import Button from '../../Components/Button/Button';
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const PickDate = () => {

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 17)
      );


    // const newDate = event => {

    // }

    // const hourAndDate = () => {

    // }

    return (
        <section className='date'>
            <div className="add-position-header">
                <div id='add-positon-navbar'>
                    <ArrowLeft color="#666666" width={'40px'} className="mx-1" />
                    <img src="https://picsum.photos/seed/picsum/200/200" className="rounded-circle" alt="Cinque Terre" />
                </div>
            </div>
            <div className='date-body'>
                <h2>Selecciona una fecha y hora</h2>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    minTime={setHours(setMinutes(new Date(), 0), 10)}
                    maxTime={setHours(setMinutes(new Date(), 0), 20)}
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
            <div>

            </div>
            <div>
                <Button width={'medium'} color="primary" >Agendar</Button>
            </div>

        </section>

    )
}

export default PickDate