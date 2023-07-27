import React from 'react';
import NavAdmin from './NavAdmin';

import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import Bot from './Bot';
function Adminhome() {
    return ( 
        <div>
            <NavAdmin/>
            <div className='scroll1'>
        <div className='d11' >
            <div className='d21'>
                <div className='d31'>
                <input className='inp1'type="text" placeholder='Source' required></input>
                <br></br><br></br>
                <input className='inp1'type="text" placeholder='Destination'required></input>
                <br></br><br></br>
                <input className='inp1'type="date" placeholder='dd/mm/yyyy'required></input>
                <br></br><br></br>
                <Link to="/Traingp">
                <button type="submit"style={{borderRadius:'10%',backgroundColor:'aquamarine',width:'100%',height:'7vh',color:'black'}}>Show Trains</button>
                </Link>
                </div>
                <div className='d41'>
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
        <div>
            
            
        <Bot/>
            </div> 
            </div>

        </div>
     );
}

export default Adminhome;