import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText + " : this is the uppercased text!!!")
        props.showAlert("Converted to Uppercase", "success"); //Here, we use the success type, according to bootstrap, meaning
        // we cannot change the type of the alert.  
    }
    const handleOnChange = (event) =>{  //The reason for creating this function is that, we can enable editing in the textform box. We have to add onChnage event 
        console.log("On change initiated!!") //If we go in console mode, we can see this line running...
        setText(event.target.value);  // after writing this line, the editing in the textform is enabled...
    }

    const[text, setText] = useState('')
  return (   // "<>" this is know as jsx fragment, which is needed when we want to add more than 1 main divs... 
    <> 
<div>
        
        <div className="mb-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <h2>{props.heading1}</h2>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>

    {/* For writing javascript, we need to put ({}), only once, but if we need to have an object, we need to have curly brackets inside curly brackets...*/}

        <div className="mb-3" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
            <h2>{props.heading2}</h2>
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark' ? '#042743' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}} value = {text} onChange={handleOnChange} rows="5"></textarea>
        </div>
        <button className = "btn btn-primary"onClick={handleUpClick}>Convert to Uppercase</button>
       
</div>

<div className='container my-3' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
    <h1>Your total no of words and characters</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
</div>
</>


  )
}
