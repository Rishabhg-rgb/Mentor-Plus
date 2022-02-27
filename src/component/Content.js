import React from 'react'
import { useState } from 'react'
import Slot from './Slot'
const Content = () => {
  const [slots, setSlots] = useState([]);
  

  const availableSlots = async (date, e) => {
    const url = 'https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json'
    let response = await fetch(url)
    let data = await response.json()
    let slot = data.filter((e) => { return e.date !== date ? "" : e.available })
    setSlots(slot)
  
    if (date === "2022-03-22T00:00:00.000Z") {
      document.getElementById('mon').classList = "date active"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-23T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date active"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-24T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date active"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-25T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date active"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-26T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date active"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-27T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date active"
      document.getElementById('sun').classList = "date"
    }
    if (date === "2022-03-28T00:00:00.000Z") {
      document.getElementById('mon').classList = "date"
      document.getElementById('tue').classList = "date"
      document.getElementById('wed').classList = "date"
      document.getElementById('thu').classList = "date"
      document.getElementById('fri').classList = "date"
      document.getElementById('sat').classList = "date"
      document.getElementById('sun').classList = "date active"
    }


  }

  return (
    <div className="content">
      <div className="leftarrow">&larr;</div>
      <h2><span className='red'>Bo</span><span className='blue'>ok</span>demo session slot</h2>
      <b>Select date</b>
      <div className="dates">
        <div id='mon' className="date" onClick={() => { availableSlots("2022-03-22T00:00:00.000Z") }}><b>Mon<br />22<br />feb</b></div>
        <div id='tue' className="date" onClick={() => { availableSlots("2022-03-23T00:00:00.000Z") }}><b>Tue<br />23<br />feb</b></div>
        <div id='wed' className="date" onClick={() => { availableSlots("2022-03-24T00:00:00.000Z") }}><b>Wed<br />24<br />feb</b></div>
        <div id='thu' className="date" onClick={() => { availableSlots("2022-03-25T00:00:00.000Z") }}><b>Thu<br />25<br />feb</b></div>
        <div id='fri' className="date" onClick={() => { availableSlots("2022-03-26T00:00:00.000Z") }}><b>Fri<br />26<br />feb</b></div>
        <div id='sat' className="date" onClick={() => { availableSlots("2022-03-27T00:00:00.000Z") }}><b>Sat<br />27<br />feb</b></div>
        <div id='sun' className="date" onClick={() => { availableSlots("2022-03-28T00:00:00.000Z") }}><b>Sun<br />28<br />feb</b></div>
      </div>

      {slots===[]?"<h1>Sorry no slots available</h1>":""}
      {slots.map((element) => {
        return <Slot hour={element.available} key={element.date} />
      })}
      
    </div>
  )
}

export default Content