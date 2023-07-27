import React from 'react';

import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
function NavAdmin() {
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
                <ul  id="navbar" >
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ManageTrain">Train</Link></li>
                    
                </ul>
            </div>
        </nav></>
     );
}

export default NavAdmin;