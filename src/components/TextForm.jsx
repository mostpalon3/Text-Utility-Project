import React, { useState } from 'react'
// import Button from './Button';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [originalText, setOriginalText] = useState('');
    const [revert, setRevert] = useState('Clear white spaces');



    const handleOnChange = (event) => {
        setText(event.target.value);
        setOriginalText(event.target.value);
    }
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleDownClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }
    const handleClearText = () => {
        setText('');
        setOriginalText(text);//updating the state that was saved in case or clicked clear text button
        setRevert('Clear white spaces');
        props.showAlert('Cleared text area','success');
    }
    const clearSpaces = () => {
        if (revert === 'Clear white spaces') {
            const newText = text.replace(/\s+/g, '');
            setOriginalText(text);
            setText(newText);
            setRevert('Revert white spaces');
            props.showAlert('Cleared white spaces','success');
        } else {
            setText(originalText);
            setRevert('Clear white spaces');
            props.showAlert('Reverted white spaces','success');
        }
    }
    const copyToClipboard = () => {
        // let textValue = document.getElementById('myBox')
        // textValue.select();//doesnt need to select when using navigator api
        navigator.clipboard.writeText(text);
        // document.execCommand('copy');
        //works for old browsers to , to copy on clipboard
        props.showAlert('Copied to clipboard','success');
        document.getSelection().removeAllRanges();
    }
    const pasteClipboard = async () => {
        try {
            const textFromClipboard = await navigator.clipboard.readText();
            setText(text + textFromClipboard);
            setOriginalText(originalText + textFromClipboard);
            props.showAlert('Pasted from clipboard','success');
        } catch (err) {
            props.showAlert('Failed to paste from clipboard','warning');
        }
    };
    const removeExtraSpaces = () => {
        const newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert('Removed extra spaces','success');
    }
    const revertBackChanges = () => {
        setText(originalText);
        props.showAlert('Reverted the changes','success');
    }
    let actualWordCountDecider = (text && originalText) ? originalText : text;
    let wordCount = (text.split(/\s+/).filter((element) => element.length !== 0)).length; //to filter empty space of the text field
    return (
        <>
            <div>
                <div className="container" >

                    <h1 className='mb-2'><strong>Try Text Utility</strong> - Word Counter | Text tools | Readability score</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                    <button disabled= {text.length === 0} className={`btn btn-${revert === 'Clear white spaces' ? 'primary' : 'success'} btn-sm mx-2 my-2`} onClick={clearSpaces}>{revert}</button>
                    <button disabled= {text.length === 0} className="btn btn-primary btn-sm mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button disabled= {text.length === 0} className="btn btn-primary btn-sm mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button disabled= {text.length === 0} className="btn btn-primary btn-sm mx-2 my-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled= {originalText.length === 0} className="btn btn-success btn-sm mx-2 my-2" onClick={revertBackChanges}>Revert Changes</button>
                    <button disabled= {text.length === 0} className="btn btn-danger btn-sm mx-2 my-2" onClick={handleClearText}>Clear Text</button>
                    <button disabled= {text.length === 0} className="btn btn-secondary btn-sm mx-2 my-2" onClick={copyToClipboard}>Copy Text</button>
                    <button className="btn btn-info btn-sm mx-2 my-2" onClick={pasteClipboard}>Paste Text</button>
                </div>
                <div className="container my-3">
                    <hr />
                    <h1>Your text summary:</h1>
                    {/* text.split gives array*/}
                    {/* .split takes the empty field as 1 , so by default it count the empty value */}
                    <ul type="circle">
                        <li>
                            {wordCount} words & {text.split('.').filter((element) => element.length !== 0).length} sentences.
                        </li>
                        <li>
                            {/* to ensure that orignalText is not used to show word when the text is cleared by clear text,as orignalText contains previous text */}
                            {actualWordCountDecider.length} characters with spaces, {text.replace(/\s+/g, '').length} characters without spaces.
                        </li>
                        <li>
                            
                            {(0.068/60 * actualWordCountDecider.length).toFixed(2)}({Math.round(0.068 * actualWordCountDecider.length)}s) Minutes read approx.
                        </li>
                    </ul>
                    <hr />
                    <h1>Preview:</h1>
                    <p>{text ? text : 'Nothing to preview.'}</p>
                    <hr />
                </div>
            </div>
        </>
    )
}
