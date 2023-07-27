import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageTrain.css';
import { useNavigate } from 'react-router-dom';
import i from './assests/location.png';
import { Link } from 'react-router-dom';

function ManageTrain() {
  const navigate = useNavigate();
  const [content, addContent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8181/train').then(function (response) {
      addContent(response.data);
    });
  }, []);


  return (
    <>
      <div className='tg111'>
        <div className='tg3t11'>
          <div className='tg311' style={{ width: '200%' }}>
            <center>
              <Link to="/AddTrain">
                <button style={{ width: '50%' }} type='submit'>Add Train</button>
              </Link>
            </center>
          </div>
        </div>
        {content.map((mp) => (
          <div className='tg2t11' key={mp.trainno}>
            <div className='tg211'>
              <div className='tg3t11'>
                <div style={{ height: '100%' }}>
                  <img src={i} style={{ width: '60%', height: '100%', paddingLeft: '9%' }} alt="Location"></img>
                </div>
              </div>
              <div className='tg3t11'>
                <div className='tg311'>
                  <span>{mp.trainname}</span>
                  <p>{mp.trainno}</p>
                </div>
              </div>
              <div className='tg3t11'>
                <div className='tg311'>
                  <span>FROM</span>
                  <p>{mp.source}</p>
                </div>
              </div>
              <div className='tg3t11'>
                <div className='tg311'>
                  <span>TO</span>
                  <p>{mp.destination}</p>
                </div>
              </div>
              <div className='tg3t11'>
                <div className='tg311'>
                  <span>ARRIVAL TIME</span>
                  <p>{mp.atime}</p>
                </div>
              </div>
              <div className='tg3t11'>
                <div className='tg311'>
                  <span>DEPARTURE TIME</span>
                  <p>{mp.dtime}</p>
                </div>
              </div>
              <div className='tg3t11' >
                <div className='tg311'>
                  <center>
                    <button style={{ width: '50%',backgroundColor:'blue',color:'white'}}onClick={()=>navigate('/UpdateTrain',{state:{id:mp.trainno}})}>Edit</button>
                  </center>
                </div>
              </div>

              <div className='tg3t11'>
                <div className='tg311'>
                  <center>
                  <button style={{ width: '50%',backgroundColor:'blue',color:'white'}} onClick={()=>navigate('/DeleteTrain',{state:{id:mp.trainno}})}>Delete</button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ManageTrain;
