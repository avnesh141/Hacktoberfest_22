import React ,{useState} from 'react'
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
        props.showalert("SUCCESS", "Text converted to Uppercase");
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
        props.showalert("SUCCESS", "Text converted to Lowercase");
  }
  const handleOnchange = (event) => {
    setText(event.target.value);
  }
  const textCopy = (event) => {
    let text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("SUCCESS", "Text copied to clipboard");
  }
  const textClear = (event) => {
    setText(" ");
        props.showalert("SUCCESS", "Text Cleared");

  }
  const rmSpace = (event) => {
    let reg = /[ ]+/;
    let arr = text.split(reg);
    setText(arr.join(" "));
    props.showalert("SUCCESS", "Extra Spaces Removed");
  }
  const [text, setText] = useState(' ');
  return (
    <>
      <div className="mb-3 container my-3 " >Text-Form
    <div  >
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='grey'?'blue':'black'}}rows="4" value={text} onChange={handleOnchange} ></textarea>
    </div>
    <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Change to UpperCase</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleDownClick}>Change to LowerCase</button>
    <button className="btn btn-primary my-3 mx-2" onClick={textCopy}>Copy Text</button>
    <button className="btn btn-primary my-3 mx-2" onClick={textClear}>Clear Text</button>
    <button className="btn btn-primary my-3 mx-2" onClick={rmSpace}>Remove Extra Space</button>
      </div>
      <div className='my-3 container'>
        <h1>Your Summary</h1>
        words {text.split(" ").length} Characters {text.length}
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h1>Preview</h1>
        <p>{text===" "?"Type something in above box to Preview here":text}</p>
      </div>
      </>
  );
}
