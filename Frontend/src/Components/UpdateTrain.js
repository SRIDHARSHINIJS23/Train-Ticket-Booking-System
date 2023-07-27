import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdateTrain.css'; // Assuming you have a separate CSS file for styling UpdateTrain component
import { useNavigate ,useLocation} from 'react-router-dom';

function UpdateTrain() {
const navigate=useNavigate();
const[trainno,setTrainno]=useState();
const[trainname,setTrainname]=useState();
const[source,setSource]=useState();
const[destination,setDestination]=useState();
const[atime,setAtime]=useState();
const[dtime,setDtime]=useState();
const[distance,setDistance]=useState();
const[date,setDate]=useState();

useEffect(() => {
  axios.get(`http://localhost:8181/train/${location.state.id}`)
  .then( res =>{
      console.log(res.data)
      setTrainno(res.data.trainno);
      setTrainname(res.data.trainname);
      setSource(res.data.source);
      setDestination(res.data.destination);
      setAtime(res.data.atime);
      setDtime(res.data.dtime);
      setDate(res.data.date);
      setDistance(res.data.distance);

  })
}, []);
async function validateTrain(e){
  e.preventDefault();
 await axios.post("http://localhost:8181/train",{
  trainno:location.state.id,
  trainname:trainname,
  source:source,
  destination:destination,
  atime:atime,
  dtime:dtime,
  distance:distance,
  date:date
  }
  )
  .then(r=>{

    alert("success");
  })
  setTrainno();
  setTrainname();
  setSource();
  setDestination();
  setAtime();
  setDtime();
  setDistance();
  setDate();
  navigate("/ManageTrain")

}
console.log(trainname)
const location=useLocation();
  return (
    <>
      <div id="at">
        {/* Your NavAdmin component or navigation links */}
        <div id='at1'>
          <h2 style={{ color: 'aliceblue' }}>Update Details</h2>
          <div id='at2'>
            <div className='at3'>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Train Number:</label>
                <input type="number" id="trainno" value={trainno} onChange={(e)=>{setTrainno(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Train Name:</label>
                <input type="text" id="trainname" value={trainname} onChange={(e)=>{setTrainname(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Source:</label>
                <input type="text" id="source" value={source} onChange={(e)=>{setSource(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Destination:</label>
                <input type="text" id="destination" value={destination} onChange={(e)=>{setDestination(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Arrival Time:</label>
                <input type="time" name="appt-time" step="2" id="atime" value={atime} onChange={(e)=>{setAtime(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Departure Time:</label>
                <input type="time" name="appt-time" step="2" id="dtime" value={dtime} onChange={(e)=>{setDtime(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Distance:</label>
                <input type="number" id="distance" value={distance} onChange={(e)=>{setDistance(e.target.value)}} class="input"></input>
              </div>
              <div class="card space icon-relative">
                <label class="label" style={{ color: '#555555', fontSize: '15px' }}>Date:</label>
                <input type="date" id="date" value={date} onChange={(e)=>{setDate(e.target.value)}} class="input"></input>
              </div>
              <div class="btn" onClick={validateTrain}>
                Update
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateTrain;
