import React from "react";

export default function TextForm() {
  return (
    <>
      <div className="mb-3">
        <label for="my-box" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </>
  );
}
