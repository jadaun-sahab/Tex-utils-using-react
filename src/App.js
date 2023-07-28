import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode , setMode] = useState('dark') ;
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      
<Navbar title="Text-Utils" abouttext="About us" mode={mode} toggleMode={toggleMode} /> 
<div className="container my-3">

<TextForm heading="Enter The Text Here To Analyze"/>
</div>
<About/>
    </>
  );
}

export default App;
