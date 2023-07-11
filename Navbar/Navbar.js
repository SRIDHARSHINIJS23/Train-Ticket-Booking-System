import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import i from './assests/t.jpg';
import './Navbar.css';
class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return ( 
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
                <ul  id="navbar" className={this.state.clicked?"#navbar active":"navbar"}>
                    <li><a className='active' href="index.html">Home</a></li>
                    <li><a href="index.html">About</a></li>
                    <li><a href="index.html">Customer Support</a></li>
                    <li><Link to="/Login">Login/Sign Up</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        <div className='d1' style={{backgroundImage:{i}}}>
            <div className='d2'>
                
            </div>
        </div>
        </>
     );
    }
}

export default Navbar;