import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode , setMode] = useState('light') ;
  const [alert, setAlert]= useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#345678';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      
<Navbar title="Text-Utils" abouttext="About us" mode={mode} toggleMode={toggleMode} /> 
<Alert alert={alert}/>
<div className="container my-3">

<TextForm heading="Enter The Text Here To Analyze" mode={mode}/>
</div>
{/* <About/> */}
    </>
  );
}

export default App;
