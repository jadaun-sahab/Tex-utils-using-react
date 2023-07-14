import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      
<Navbar title="Text-Utils" abouttext="About us"/> 
<div className="container my-3">

<TextForm heading="Enter The Text Here To Enalyze"/>
</div>
    </>
  );
}

export default App;
