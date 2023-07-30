import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to UpperCase","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to LowerCase","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  };  

  const handleCopy = () => {
    let text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied! To Clipboard","success")
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{
          background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-success mx-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-warning mx-3 my-3" onClick={handleExtraSpace}>Remove Extra Space</button>
      <button className="btn btn-info mx-3 my-3" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-2"style={{color:props.mode==='dark'?'white':'black'}}>
      <h1 className="mx-3 my-3">submit your text</h1>
      <p className="mx-3 my-3">{text.split(" ").length} Words and {text.length} character</p>
      <p className="mx-3 my-3">{0.008 * text.split(" ").length} minutes read time</p>
      <h2 className="mx-3 my-3">Preview</h2>
      <p className="mx-3 my-3">{text.length===0?'Enter something on the text box to preview ':text}</p>
    </div>
    </>
    
  );
}
