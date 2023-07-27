import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {login,logout} from './features/user';
function UserLogin() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailerr,setEmailerr]=useState('');
  const[passerr,setPasserr]=useState('');
  const [errors, setErrors] = useState();

  const user=useSelector(state => state.user.value)
  const [content, addContent]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
    addContent(response.data);
  });
},[])
const handleNext=()=>{
  dispatch(login({email}));navigate("/")
}
const handleChange = async(e) => {
  e.preventDefault();
  if(email.length===0){
    setEmailerr("EmailId  is required");    
    return;
  }
  else{
    setEmailerr("");    
  }
  if(password.length===0){
    setPasserr("Password is required");    
    return;
  }
  else{
    setPasserr("");    
  }
  if(email.length!==0 && password.length!==0){
try{
const response = await axios.post(
  'http://localhost:8181/api/v1/auth/authenticate',
  {
    email,
    password
  });
  handleNext();
  let token = response.data.token;
  let user = response.data.userResponse;
  localStorage.setItem('token',token);
  localStorage.setItem('user',JSON.stringify(user));
}
catch(error){
  console.log("helloooo");
  if (error.response && error.response.status === 403) {
    setErrors("Invalid email or password" );
  } else {
    console.error('Error:', error);
  }
}
}
};
    return (<>
    <div className="top1">
      <div className="container" >
      <form>
        <center>
      <h1>Login</h1>
      <input type="text" placeholder="Email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <span style={{color:"red"}}>{emailerr}</span>
        <span style={{color:"red"}}>{errors}</span>
        <input type="password" placeholder="Password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <span style={{color:"red"}}>{passerr}</span>
        <br></br>
        <button onClick={handleChange} type="submit">Login</button>
        <br></br>
        <Link to='/Register'>Don't have an account? Register</Link>
        <br></br>
        <Link to='/AdminLogin'>Are you a Admin?Login</Link>
        </center>
       
      </form>
      </div>
    </div>
    </>  );
}

export default UserLogin;