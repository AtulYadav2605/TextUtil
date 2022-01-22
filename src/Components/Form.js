import React,{useState} from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
    const [text,setText] = useState("");
    const handleup = ()=>{
    console.log("Button was clicked");
    let a = text.toUpperCase();
    setText(a);
    props.showAlert("Text is coverted into uppercase","Success");
    }
    const handlelow = ()=>{
      console.log("Button was clicked");
      let ab = text.toLowerCase();
      setText(ab);
      props.showAlert("Text is coverted into lowercase","Success");
      }
    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    const handlecl = ()=>{
      setText("");
      props.showAlert("Text is coverted into cleared","Success");
    }
    const [mystyle, setmystyle] = useState({
      color: "black"
    }
    );
    // const handlecol = ()=>{
    //   setmystyle({
    //     color: "red"                         //just to tell you ki ho gaya hai   
    //   })                                     //but style already de chuke hai to ye karneka raasta nahi mil raha hai (line number: 60)
    //   if(setmystyle === "true"){
    //     props.showAlert("Text color is changed","Success");
    //   }
    // }
    const handlecopy = ()=>{
    var abi = document.getElementById('mytext');
    abi.select();
    navigator.clipboard.writeText(abi.value);
    props.showAlert("Text is copied to clipboard","Success");
    }
    const handlespace = ()=>{
    let abg = text.split(/[ ]+/);
    setText(abg.join(" "));
    props.showAlert("Text is formatted","Success");
    }
    const handleword = (gh)=>{
      if(gh.length === 0){
        return 0;
      }
      else{
        return (gh.split(" ").length-1);
      }
    }
  return (<>
  <div className="container">
  <div className="mb-3">
    <label htmlFor="mytext" className="form-label"><h3>{props.title}</h3></label>
    {/* <textarea className="form-control mtu" value={text} onChange={handleonchange} style={mystyle} id="mytext" placeholder="Enter Here" rows="8"></textarea> */}
    <textarea className="form-control mtu" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'gray':'white'}} id="mytext" placeholder="Enter Here" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick={handleup}>Covert Into UpperCase</button>
  <button className="btn btn-success mx-1" onClick={handlelow}>Covert Into LowerCase</button>
  <button className="btn btn-danger mx-1" onClick={handlecl}>Clear Text</button>
  {/* <button className="btn btn-secondary mx-1" onClick={handlecol}>Change text color</button> */}
  <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick={handlespace}>Remove extra space</button>
  </div>
  <div className="container my-3">
    <h3>Words Summary</h3>
    <p>Words: {handleword(text)} <br/>
    Characters: {text.length}<br/>
    Time to read: {0.008 * text.split(" ").length}<br/>
    Preview:<br/>
    {text.length>0?text:"Enter something in the text box to preview here"}
    </p>
  </div>
  </>
  );
}
Form.propTypes = {
    title: PropTypes.string.isRequired
}