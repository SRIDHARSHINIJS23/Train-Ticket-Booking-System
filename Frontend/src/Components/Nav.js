import React from 'react';

import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import './Nav.css';
import {useSelector} from 'react-redux';
import UserLogout from './logut';
import user from './features/user';
function Nav () {
    // state={clicked:false};
    // handleClick=()=>{
    //     this.setState({clicked:!this.state.clicked})
    // }
    
    const user=useSelector(state => state.user.value)
        return(
            <>
            <nav>
            <h3 style={{fontFamily:'monospace',color:'aquamarine'}}>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Journey at its luxurious best....!")
                        .pauseFor(1000)
                        .start()
                        
                }}
            />
            </h3>
            <div >
                <ul  id="navbar" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About</Link></li>
                    <li><Link to="/customersupport">Customer Support</Link></li>
                    <li><Link to="/Feedback">Feedback</Link></li>
                    <li>{!user.email?
                        <Link to="/Login">Login/Sign Up</Link>:
                        <h4 style={{color:'aquamarine'}}>{user.email}<br></br><UserLogout/></h4>}</li>
                </ul>
            </div>
            {/* <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div> */}
        </nav>
            </>
        )

}
 
export default Nav;