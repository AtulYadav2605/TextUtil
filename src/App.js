//import logo from './logo.svg';
import './App.css';
// import Aboutus from './Components/Aboutus';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light");
  const [swname, setswname] = useState("Enable Dark Mode");
  const [mystyle, setmystyle] = useState({ color: "black" });
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      setswname("Enable Dark Mode");
      setmystyle({ color: "black" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Dark mode is disabled", "Success");
    }
    else {
      setmode("dark");
      setswname("Disable Dark Mode");
      setmystyle({ color: "white" });
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark mode is enabled", "Success");
    }
  }


  return (
    //class is written as className, for is written is htmlFor etc and everything should be inside a single. This is JSX
    <>
     {/* <Router> */}
      <Navbar title="Textutils" about="AboutUs" mode={mode} toggleMode={toggleMode} switchname={swname} mystyle={mystyle} /> {/* to understand how I gave title go to Navbar.js */}
      <Alert alert={alert} />

      {/* <Aboutus/> */}
      {/* <Switch> */}
        {/* <Route exact path="/about">    Always use eaxct before path so the exact path should be matched */}
          {/* <Aboutus /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
          <div className="container my-3"><Form title="Enter Your text here" showAlert={showAlert} mode={mode} /></div>
        {/* </Route> */}
      {/* </Switch> */}
     {/* </Router> */}
    </>
  );
}

export default App;
