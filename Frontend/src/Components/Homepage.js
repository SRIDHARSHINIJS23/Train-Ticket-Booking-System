import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import Bot from './Bot';
import Typewriter from "typewriter-effect";
import Nav from './Nav';
function Homepage() {
    const[source,setSource]=useState("");
    const[destination,setDestination]=useState("");
    const[date,setDate]=useState("");

  const sourceOptions = ["Coimbatore", "Chennai", "Tiruppur","Namakkal","Mumbai"];
  const destinationOptions =  ["Coimbatore", "Chennai", "Tiruppur","Namakkal","Mumbai"];
    return ( 
        <>
        <Nav/>
        <div className='scroll1'>
        <div className='d11' >
            <div className='d21'>
                <div className='d31'>
                
                <select id='sfrom' className='inp1' value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="">Select Source</option>
            {sourceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
            <br></br><br></br>
          <select id='sto' className='inp1'value={destination} onChange={(e) => setDestination(e.target.value)}>
            <option value="">Select Destination</option>
            {destinationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <br></br><br></br>
                <input className='inp1'type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} placeholder='dd/mm/yyyy'required></input>
                <br></br><br></br>
                <Link to="/Traingp" state={{from:source,to:destination,dateofj:date}}>
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

        </>
     );
}

export default Homepage;