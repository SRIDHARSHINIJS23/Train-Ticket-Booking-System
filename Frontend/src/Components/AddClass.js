import React from 'react';
import { useState } from 'react';
import NavAdmin from './NavAdmin';
import { useLocation } from 'react-router-dom';
function AddClass() {
    const[tId,setTId]=useState(0);
    const[ac1,setAc1]=useState(0);
    const[ac2,setAc2]=useState(0);
    const[ac3,setAc3]=useState(0);
    const[sleeper,setSleeper]=useState(0);
    const[first,setFirst]=useState(0);
    const[second,setSecond]=useState(0);
    const location=useLocation();
    const key=location.state.id;
    return ( 
        <>
        <div id="at">
        <NavAdmin/>
        <div id='at1'>
          <h2 style={{color:'aliceblue'}}>Add Train</h2>
            {/* <center> */}
            <div id='at2'>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Train No:</label>
            <input type="number"  id="ac1" value={key}  class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in AC I:</label>
            <input type="number"  id="ac1" value={ac1} onChange={(e)=>{setAc1(e.target.value)}} class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in AC II:</label>
            <input type="number"  id="ac2" value={ac2} onChange={(e)=>{setAc2(e.target.value)}} class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in AC III:</label>
            <input type="number" id="ac3" value={ac3} onChange={(e)=>{setAc3(e.target.value)}} class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in Sleeper:</label>
            <input type="number" id="sleeper" value={sleeper} onChange={(e)=>{setSleeper(e.target.value)}} class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in First Class:</label>
            <input type="number" id="first" value={first} onChange={(e)=>{setFirst(e.target.value)}} class="input"></input>
          </div>
          <div class="card space icon-relative">
            <label class="label"style={{color:'#555555',fontSize:'15px'}}>Available Seats in Second Class:</label>
            <input type="number"  id="second" value={second} onChange={(e)=>{setSecond(e.target.value)}} class="input"></input>
          </div>
          <div class="btn" >
          Add Train
          </div> 
          </div>
            </div>
            {/* </center> */}
        </div>

        </>
     );
}

export default AddClass;