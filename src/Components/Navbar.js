//import { Link } from 'react-router-dom'
import React from 'react'
import PropTypes from 'prop-types'
 //This is how we import the link from react router dom, which is used to link the pages in react...
// import { useState } from 'react' //This is how we import the useState from react, which is used to create the state in react...

// The react router is commented for now, as we are commiting the code in git, and it does not support react router


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> {/* emplate literals in React
    , as in JavaScript, are string literals enclosed by backticks (`) that allow embedded expressions. 
    These expressions, delimited by ${}, can include variables, function calls, or any valid JavaScript code 
    that resolves to a value. */}
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>   {/* THis is how we write comments*/}
    {/* The props.title, is accepting or reading the value, which is written in the App.js!!*/}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/*<li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li> */}
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/*We have used the ternary operator here, which is the small verison of the if else loop   */}
        <input className="form-check-input" onClick ={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label"  htmlFor="switchCheckDefault">Dark Mode</label> {/* We use htmlFor , instead of for in our label tag*/}
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string }

{/*the above line declares the type of value sent to the prop*/}

Navbar.defaultProps = {title : 'Set the new title here'}; {/*If the prop value is not passed, then this value will take place */}