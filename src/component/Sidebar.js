import React from 'react'

const Sidebar = () => {

  
  return (
    <div className='sidebar'>
      <div className="content">
        <div className="logo">Mentor <span style={{ color: "red" }}>Plus</span></div>
        <ul>
          <li style={{ backgroundImage: "linear-gradient(to right,rgb(175, 203, 255),rgb(73, 136, 252))" }}>Home</li>
          <li style={{ backgroundImage: "linear-gradient(to right,rgb(253,253,254),rgb(206, 223, 255)))" }}>Profile</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div id="hamBurgerIcon" className="hamburgericon">
      <div className="hamburger"></div>
      <div className="hamburger"></div>
      <div className="hamburger" style={{width:"15px"}}></div>
      </div>
    </div>
  )
}

export default Sidebar