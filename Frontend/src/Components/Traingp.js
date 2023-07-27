import React from 'react';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import i from './assests/location.png';
import { Train } from './Train';
import './Traingp.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Selection from './Selection';
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';
function Traingp() {
    const [content, addContent]=useState([]);
    const location=useLocation();
    const f=location.state.from;
    const t=location.state.to;
    const d=location.state.dateofj;
    const data=location.state;
    useEffect(()=>{
        axios.get(`http://localhost:8181/train/source/${f}/destination/${t}`).then(function (response) {
    addContent(response.data);
    console.log(content);

  });
    });
    return ( 
        <>
        <div className='tg1'>
            {content.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'5%',height:'100%'}}>
                    <img src={i} style={{width:'60%',height:'100%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.trainname}</span>
                    <p>{mp.trainno}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.source}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.destination}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>ARRIVAL TIME</span>
                    <p>{mp.atime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>DEPATURE TIME</span>
                    <p>{mp.dtime}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <center>
                        <Link to="/Selection"  state={mp}>
                    <button style={{paddingBottom:'15px',paddingTop:'10px',display:'flex',marginBottom:'0 1rem',width:'100%'}} type='submit'>Show Availability</button>
                    </Link>
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

export default Traingp;