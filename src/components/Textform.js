import React from 'react'
import { useState } from 'react'

export default function Textform(props) {


    const handleUpClick = () => {

        console.log("Uppercase was clicked");
        //function get fired
        setText("You have clicked on handleUpclick" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase !!" , "success")

    }
    const handleDownClick = () => {

        console.log("Lowercase was clicked");
        //function get fired
        setText("You have clicked on handleDownclick" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase !!" , "success")

    }
    const handleClearClick = () => {

        console.log("cleartext was clicked");
        //function get fired
        setText("You have clicked on handleClearClick" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared !!" , "success")

    }
    const handleOnChange = (event) => {

        console.log("Uppercase was clicked");
        setText(event.target.value)

    }
    // const handlefindChange = (event) => {
    //     findWord(event.target.value);
    // };
    // const handleReplaceChange = (event) => {
    //     console.log(replaceWord(event.target.value));
    // };
    // const handleReplaceClick = () => {
    //     let newText = text.replaceAll(fWord, rWord);
    //     setText(newText);
    // }
    const hanndleCopyClick = () => {
      
       var text = document.getElementById("myBox");
       text.select();
       text.setSelectRange(0,9999);
       navigator.clipboard.writeText(text.value);
       props.showAlert("Copied to clickboard !!" , "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed !!" , "success")
    }

    const [text, setText] = useState(''); // Set State
    // const [fWord, findWord] = useState("");
    // const [rWord, replaceWord] = useState("");
    return (
        <>
            <div className='container' style = {{color : props.mode === 'dark' ? 'white' : '#01061d'}}>

                <h1>{props.heading}</h1>

                <div className="mb-4">
                    {/* <label htmlFor="mybox" className="form-label">{props.heading}</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#01061d'}} id="mybox" rows="8"></textarea>  {/*onChange is listen parameter */}
                </div>
                <button className='btn btn-secondary mx-2 my-2' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-secondary mx-2 my-2' onClick={handleDownClick}>Convert To Lowercase</button>
                <button className='btn btn-secondary mx-2 my-2' onClick={handleClearClick}>Clear Text</button>
                {/* <button className='btn btn-secondary mx-2 my-2' onClick={handleReplaceClick}>Replace</button> */}
                <button className='btn btn-secondary mx-2 my-2' onClick={hanndleCopyClick}>Copy Text</button>
                <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>

            <div className='container my-3'style = {{color : props.mode === 'dark' ? 'white' : '#01061d'}}>
                <h2>Your Text Summary</h2>
            
                <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
            <p>{0.008 * text.split(" ").length}Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>

            </div>
        </>

    )
}

