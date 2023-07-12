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
                    <li><Link to="/AboutUs">About</Link></li>
                    <li><a href="index.html">Customer Support</a></li>
                    <li><Link to="/Login">Login/Sign Up</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ?"fas fa-times":"fas fa-bars"}></i>
            </div>
        </nav>
        <div className='d1' >
            <div className='d2'>
                <div className='d3'>
                <input className='inp'type="text" placeholder='Source' required></input>
                <br></br><br></br>
                <input className='inp'type="text" placeholder='Destination'required></input>
                <br></br><br></br>
                <input className='inp'type="date" placeholder='dd/mm/yyyy'required></input>
                <br></br><br></br>
                <button type="submit"style={{borderRadius:'10%',backgroundColor:'aquamarine',width:'100%',height:'7vh',color:'black'}}>Book Your Travel </button>
                </div>
                <div className='d4'>
                <h3 style={{fontFamily:'monospace',color:'aquamarine',float:'right'}}>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Train journeys: forging memories that last a lifetime.")
                        .pauseFor(1000)
                        .start()
                        
                }}
            />
            </h3>
                
                </div>
            </div>
        </div>
        </>
     );
    }
}

export default Navbar;