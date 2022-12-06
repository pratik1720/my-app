import React,{useState} from 'react'

export default function TextclassNamem(props) {
    const handleupclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase","success")
    }
    const handlelowclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase","success")
    }
    const handleclearclick=()=>{
        // console.log("Uppercase was clicked"+text);
        let newText=text.replace(text,"");
        setText(newText);
        props.showAlert("Clear the text","success")
    }
    const handlecopy=()=>{
       let text=document.getElementById("mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copy the text","success")
        
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces got handle","success")
        
    }
    
    const handleOnChange=(event)=>{
    // console.log("OnChange was clicked");
    setText(event.target.value);
}
    const [text, setText] = useState('');
  return (
    <>
   < div className="container" style={{color:props.mode==='light'?'black':'white'}} >
   <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handlelowclick}>convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleclearclick}>clearText</button>
<button className="btn btn-primary mx-2" onClick={handlecopy}>copyText</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
  </div>
  <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.0008*text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter the text in textbox to preview it here"}</p>
  </div>
  </>
  )
}
