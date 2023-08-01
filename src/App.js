import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light') ;
  const [alert, setAlert]= useState()
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#10273f';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#e5e4ff';
      showAlert("Light mode enabled","success");
    }
  }
  return (
    <>
      
<Navbar title="Text-Utils" abouttext="About us" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
<div className="container my-3">

<TextForm showAlert={showAlert} heading="Enter The Text Here To Analyze" mode={mode}/>
</div>
{/* <About/> */}
    </>
  );
}

export default App;
