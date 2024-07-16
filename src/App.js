import Navbar from './components/Navbar.jsx';
import './App.css';
import TextForm from './components/TextForm.jsx';
import About from './components/About.jsx';
import React, { useState } from 'react';
import Alert from './components/Alert.jsx';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//in function based component react is not being used
let clearId;
export default function App() {
    const [mode, setMode] = useState('dark');
    const [alert, setAlert] = useState(null);
    // CSS styling
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });
    const showAlert = (message, type) => {
        clearTimeout(clearId);
        setAlert({
            msg: message,
            type: type
        });
        clearId = setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    // let clearId;
    const toggleDarkMode = () => {
        if (mode === 'light') {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setMode('dark');
            showAlert('Light mode enabled.', 'success');
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });

        } else {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            setMode('light');
            showAlert('Dark mode enabled.', 'success');
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            });
        }
        // clearId = setInterval(() => {
        //     document.title = `${capitalize(mode)} mode`
        // },3000);
    }
    return (
        <>
            {/* The app is about , text utility :where the app will lower or upper the case of the text, or remove spaces b/w them and some other features too.*/}
            {/* we need to close the self closing tag in html , here by adding this '/ ' at last */}
            {/* <Navbar title="TextUtility" about = "About Us"/> */}
            <Router>
                 {/* CHANGED: Using BrowserRouter instead of Router */}
                <Navbar title="Text Utility" mode={mode} toggleDarkMode={toggleDarkMode} />
                <Alert alert={alert} />
                <Routes>
                    {/* exact path matches only the exact path,not the subpaths */}
                    <Route exact path="/" element={
                        <TextForm showAlert={showAlert} />
                        }/> 
                         {/* CHANGED: Using element prop */}
                    <Route exact path="/about" element={
                        
                        <About myStyle={myStyle}/> 
                          } />
                         {/* CHANGED: Using element prop */}
                </Routes> 
                <div className="container my-3">
                </div>
             </Router>
        </>
    );
}

