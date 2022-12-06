
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
    
  }
  let toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been on","success")
      document.title='TextUtils-DarkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been on","success")
      document.title='TextUtils-LightMode'
    }
  }
  return (
    <>
    {/* <About/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  aboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Router>
      <div>
         {/* <nav>
          <ul>
            <li> */}
              <Link to="/">Home</Link>
           
              <Link to="/about">About</Link>
            {/* </li>
          </ul>
        </nav>  */}

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
   
        </div>   
         
       
       
    
    </>
  );
}

export default App;
