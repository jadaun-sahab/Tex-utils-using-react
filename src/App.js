import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode , setMode] = useState('light') ;
  const toggleMode = () =>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      
<Navbar title="Text-Utils" abouttext="About us" mode={mode} toggleMode={toggleMode} /> 
<div className="container my-3">

<TextForm heading="Enter The Text Here To Analyze" mode={mode}/>
</div>
{/* <About/> */}
    </>
  );
}

export default App;
