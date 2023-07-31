import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upperCase", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lowerCase", "success");

  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Clear", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
    // props.showAlert("", "success");

  }
  const handleCopy = () => {
console.log("I am copy");
let text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value);
props.showAlert("Text Copy", "success");
  }
  const handleDownloadClick = () => {
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'myTextFile.txt';
    document.body.appendChild(element); 
    element.click();
  };
  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea className='form-control' value={text} onChange={handleOnChange}style={{background:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary  mx-1" onClick={handleUpClick}>Convet to UperCase</button>

        <button className="btn btn-primary  mx-1" onClick={handleLoClick}>Convet to LowerCase</button>
        <button className="btn btn-primary  mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary  mx-1" onClick={handleDownloadClick}>Download Text</button>
        <button className="btn btn-primary  mx-1" onClick={handleCopy}>Copy Text</button>




      </div>
      <div className='conatiner' my-3>
        <h2>Your text summary </h2>
        <p>{text.split(" ").length} Words ,  {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the texbox above to preview it here"}</p>

      </div>
    </>
  )
}
