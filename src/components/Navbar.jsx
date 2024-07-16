//typed rfc , for react based component template
import React from 'react'
import PropTypes from 'prop-types'//used impt
import Button from './Button'
// import { toggleDarkMode } from './TextForm'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
                  <nav className={`navbar navbar-expand-lg bg-${props.mode}`} data-bs-theme={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    {/* removed home and about section,since we are not using the router */}
                    <button className="navbar-toggler" type="button" data-bs-toggle='collapse' data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* if we use a and href then site will start reloading*/}
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                    </div>  
                        <Button toggler = {props.toggleDarkMode}/>
                </div>
            </nav>
    </div>
  )
}

Navbar.propTypes = {
  //it ensures the prop is feeded are tring
  title:PropTypes.string.isRequired,//this ensures title is required
  about:PropTypes.string,

}
Navbar.defaultProps = {
    //if we dont want to set props yet ,this will be in pace of the props and will not throw the error
    title: 'Set title here',
    about: 'About Me'
}
//Js style(new way)
// function MyComponent({ prop1 = 'defaultProp1', prop2 = 'defaultProp2' }) {
//     return (
//       <div>
//         {prop1}
//         {prop2}
//       </div>
//     );
//   }
  