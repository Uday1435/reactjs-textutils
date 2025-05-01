//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
//We will follow the above procedure for react router function...
import { use, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import About from './Components/About';
import React from "react";




function App() {
  const [mode,setMode] = useState('light'); // whether dark mode is enabled or not
  // Here the mode value is light by default, and we are using useState hook to create the state in react...
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {   // This is how we create a function in react...
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {  //Here, we cannot change setTimeout. 
      setAlert(null);
    }, 1500); // This will remove the alert after 1.5 seconds
  
    
  }
  const toggleMode = () => {
    if(mode ==="light") { // we use === for checking the equality...
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success"); //Here, we use the success type, according to bootstrap, meaning
      // we cannot change the type of the alert.
      document.title = "Landing Page - Dark Mode"; //This will change the title of the page, when we click on the dark mode...
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Landing Page - Light Mode";
    }

  }
 return (
  <>
{/*<Router>*/} {/*  This is how we create the router in react..., it is used to access any other page created within the webpage, here,
to access the About page. */}
 <Navbar title = "Landing Page" mode={mode} toggleMode={toggleMode}/> {/* This value is passed in the props.util*/}
 <Alert alert ={alert}/>
 <div className='container'>
   {/* <Routes>
      <Route path="/" element={<TextForm heading1="Enter your email" heading2="Enter the text to analyze" mode={mode} showAlert={showAlert} />} /> 
      <Route path="/about" element={<About />} />
    </Routes> */}
   <TextForm heading1="Enter your email" heading2="Enter the text to analyze" mode={mode} showAlert={showAlert} />
</div>
  {/* </Router> */}
  </>
// Remember, the router tag should always be at the top, meaning, it should not be inside the div tag or any other tag
// Now, using react router, we can access multiple webpages which we have created. Only 
 ); 
  
  
  //This is not HTML, it is JSX or Javascript
  // Here, instead of class, we use className...
  // We can include bootstrap here.
  // Keep in mind, when the bootstrap is included, the tags which do not have an ending tag, need to have a backslash...
 
  
}

export default App;
