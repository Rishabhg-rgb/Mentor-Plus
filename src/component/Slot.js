import React from 'react'

const Slots = (props) => {

  const { hour } = props
  
  const active = (postion) => {
    if (postion === "left") {
      document.getElementById('leftSlot').classList = "slot active";
      document.getElementById('rightSlot').classList = "slot";
    }
    if (postion === "right") {
      document.getElementById('leftSlot').classList = "slot"
      document.getElementById('rightSlot').classList = "slot active"
    }
  }

  return (
    <>
      <h3>Select slots</h3>
      
      <div className="slots" style={{ display: 'flex' }}>

        <div id='leftSlot' className="slot" onClick={() => { active("left") }}>{hour[0].hour}PM - {hour[0].hour + 1}PM</div>
        <div id='rightSlot' className="slot" onClick={() => { active("right") }}>{hour[0].hour + 1}PM - {hour[1].hour}PM</div>

      </div>
      {hour===""?<h1>Sorry! No Seats Available</h1> : <button>Proceed to pay</button>}
    </>
  )
}

export default Slots