import React from 'react';
import i from './assests/location.png';
import { Train } from './Train';
import './Traingp.css';
import Nav from './Nav';
function Traingp() {
    return ( 
        <>
        <Nav/>
        <div className='tg1'>
            {Train.map((mp)=>(
            <div className='tg2t'>
            <div className='tg2'>
                <div className='tg3t'>
                <div style={{paddingLeft:'5%',height:'100%'}}>
                    <img src={i} style={{width:'60%',height:'100%',paddingLeft:'9%'}}></img>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>{mp.name}</span>
                    <p>{mp.no}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>FROM</span>
                    <p>{mp.from}</p>
                </div>
                </div>
                <div className='tg3t'>
                <div className='tg3'>
                    <span>TO</span>
                    <p>{mp.to}</p>
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
                    <button style={{paddingBottom:'15px',paddingTop:'10px',display:'flex',marginBottom:'0 1rem',width:'100%'}} type='submit'>Show Availability</button>
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