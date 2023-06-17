// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import Textform from './components/Textform';
import React, { useState } from 'react';
import About from './components/About';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); // Whether dark mode is enabled or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const ToggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#01061d';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
      setInterval(() => {
        document.title = "Dark Mode Enabled";

      }, 1500);
      setInterval(() => {
        document.title = "TextUtils - Dark Mode"
          ;

      }, 3000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";

    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" hometext="Home" /> */}
      <Router>
        <Navbar title="TextUtils" mode={Mode} togleMode={ToggleMode} />
        <Alert alert={alert} />

        <div className='container my-3'>
          <Routes>
            
            <Route exact path="/" element = {<Textform showAlert={showAlert} heading="Enter Text To analyze" mode={Mode} />}></Route>
            <Route exact path="/about" element={<About mode={Mode} />}> </Route>
          </Routes>
        </div>

      </Router>


      

      {/* <Textform/> */}

    </>
  );
}

export default App;
