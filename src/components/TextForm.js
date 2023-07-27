import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = (event) => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container my-2">
      <h1>submit your text</h1>
      <p>{text.split(" ").length} Words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read time</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
    
  );
}
