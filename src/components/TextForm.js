import React , {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading} - {text}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary">convert to uppercase</button>
    </div>
  );
}
