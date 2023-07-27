import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Selection.css';
import { useLocation, Link } from 'react-router-dom';
import bg from './assests/vedio.mp4';

function Display(props) {
  const [pname, setPname] = useState('');
  const [age, setAge] = useState('');
  const [adhar, setAdhar] = useState('');
  const [tclass, setTclass] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState(1000);

  const handleOk = () => {
    if (tclass === "AC1") {
      setPrice("1000");
    } else if (tclass === "AC2") {
      setPrice(1250);
    } else if (tclass === "AC3") {
      setPrice(1000);
    } else if (tclass === "FirstClass") {
      setPrice(750);
    } else if (tclass === "SecondClass") {
      setPrice(500);
    } else if (tclass === "Sleeper") {
      setPrice(650);
    }

    const data = {
      pname,
      age,
      adhar,
      tclass,
      gender,
      price,
    };
console.log(data);
    // Call the callback function with the data
    props.onDataChange(data);
  };

  return (
    <>
      <div className='i11'>
        <br />
        <br />
        <fieldset style={{ width: '90%' }}>
          <legend>PASSENGER {props.n + 1}</legend>
          <input
            type='text'
            placeholder='Name'
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px' }}
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
          <br />
          <br />
          <input
            type='number'
            placeholder='Age'
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />
          <input
            type='text'
            placeholder='Aadhar Number'
            style={{ border: 'none', width: '17%', height: '3vh', borderRadius: '10px' }}
            value={adhar}
            onChange={(e) => setAdhar(e.target.value)}
          />
          <br />
          <br />
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={tclass}
            onChange={(e) => setTclass(e.target.value)}
          >
            <option value='AC1'>AC 1</option>
            <option value='AC2'>AC 2</option>
            <option value='AC3'>AC 3</option>
            <option value='Sleeper'>SLEEPER</option>
            <option value='FirstClass'>FIRST CLASS</option>
            <option value='SecondClass'>SECOND CLASS</option>
          </select>
          <br />
          <br />
          <select
            style={{ border: 'none', width: '18%', height: '5vh', borderRadius: '10px' }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value='Gender'>Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
          </select>
          <br />
          <br />
          <button onClick={handleOk}>OKAY</button>
        </fieldset>
      </div>
    </>
  );
}


function Selection () {
    
        
  const location = useLocation();
  const data = location.state;
  const [content, addContent] = useState([]);
  const [total, setTotal] = useState(0);
  const [mt, setMt] = useState({});
  const [passengerData, setPassengerData] = useState([]);
  const [num, setNum] = useState(0);
  const [forms, setForms] = useState([]);
  const[displayAmt,setdisplayAmt]=useState("none");

  const handleDataChange = (data) => {
    setPassengerData((prevData) => [...prevData, data]);
  };

  const handleSubmit = () => {
    const formsArray = [];
    for (let i = 0; i < num; i++) {
      formsArray.push(<Display key={i} n={i} onDataChange={handleDataChange} />);
    }
    setForms(formsArray);
  };
  useEffect(() => {
    let str = 'http://localhost:8181/trainclass?tId=';
    str = str + data.train_no;
    axios.get(str).then(function (response) {
      addContent(response.data);
    },[]);
    content.map((value) => {
      setMt({
        ac1: value.ac1,
        ac2: value.ac2,
        ac3: value.ac3,
        first: value.first,
        second: value.second,
        sleeper: value.sleeper,
      });
    });
  }, []);


  const handlePay=()=>{
    let sum=0;
    passengerData.map((passenger, index) => {
        sum=sum+passenger.price;
    })
    console.log(sum);
    setTotal(sum);
    setdisplayAmt("block");
  };



  return (
    <>
      <div className='s1'>
        <div className='s2'>
          <video className='videoTag' style={{ width: '50%', height: '50vh' }} autoPlay loop muted>
            <source src={bg} type='video/mp4' />
          </video>
          <h1 style={{ float: 'right', paddingRight: '17%', paddingTop: '11%' }}>
            {data.trainname}<br></br><span style={{ color: 'darkgrey' }}>{data.trainno}</span>
          </h1>
          <div className='tg2t1'>
            <div className='tg21'>
            <div className='tg3t1'>
                <div className='tg31'>
              <span>DATE</span>
              <p>{data.date}</p>
            </div>
            </div>
	        <div className='tg3t1'>
                <div className='tg31'>
                    <span>FROM</span>
                    <p>{data.source}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>TO</span>
                    <p>{data.destination}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>ARRIVAL TIME</span>
                    <p>{data.atime}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>DEPATURE TIME</span>
                    <p>{data.dtime}</p>
                </div>
                </div>
                <div className='tg3t1'>
                <div className='tg31'>
                    <span>DISTANCE</span>
                    <p>{data.distance}</p>
                </div>
                </div>
            <br></br>
            <fieldset > <legend>AVAILABLE SEATS</legend>
               
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>AC1</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac1}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[1500]</span><br></br>
               </div>
               </div>
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>AC2</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac2}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[1250]</span><br></br>
               </div>
               </div>
       
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>AC3</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.ac3}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[1000]</span><br></br>
               </div>
               </div>
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>FIRST CLASS</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.first}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[750]</span><br></br>
               </div>
               </div>
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>SECOND CLASS</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.second}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[500]</span><br></br>
               </div>
               </div>
               <div className='tg3t1'>
               <div className='tg31'>
                   <span>SLEEPER</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>{mt.sleeper}</span><br></br>
                   <span style={{color:'darkgray',textDecoration:'none'}}>[650]</span><br></br>
               </div>
               </div>
       
               </fieldset>
            <br></br>
            <span style={{ fontSize: 'larger', fontWeight: 'bold' }}>NUMBER OF PASSENGERS:  </span>
            <input type="number" min={0} onChange={(e) => { setNum(e.target.value) }}></input>
            <button type="submit" style={{ width: '10%' }} onClick={handleSubmit}>Proceed</button>
            <br></br>
            {forms}
            {passengerData.map((passenger, index) => (
            <div key={index} className="passenger-data">
              <h3>PASSENGER {index + 1}</h3>
              <p>Name: {passenger.pname}</p>
              <p>Age: {passenger.age}</p>
              <p>Aadhar Number: {passenger.adhar}</p>
              <p>Class: {passenger.tclass}</p>
              <p>Gender: {passenger.gender}</p>
              <p>Price: {passenger.price}</p>
            </div>
          ))}
          </div>
        </div>
        </div>
        <center>
          <div>
          {/* <Link to='/Payment'> */}
            <button type='submit' style={{ color: 'white', backgroundColor: 'blue', width: "30%" }} onClick={handlePay}>Proceed</button>
          {/* </Link> */}
          </div>
           <div style={{display:displayAmt}}>
          <Link to='/Payment'>
            <button type='submit' style={{ color: 'white', backgroundColor: 'blue', width: "30%" }}>Make Payment------Rs.{total}</button>
          </Link>
          </div>
        </center>

      </div>
    </>
  );
}

export default Selection;
