import React, { useState,useEffect } from 'react';
import './Register.css'; 
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { login,logout } from './features/user';
function Register(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const[content,addContent]=useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleNext=()=>{
    dispatch(login({email}));navigate("/")
  }
  useEffect(()=>{
    axios.get('http://localhost:8181/api/v1/auth/get').then(function (response) {
      addContent(response.data);
      
    });
  })

  const validateForm = () => {
    const errors = {};
    content.map((value)=>{
      if(value.email===email){
        errors.email="The Email Id already exists";
        console.log("The Email Id already exists");
      }
    })

    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
    }
    
    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
    }
    
    if (email.trim() === '') {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Invalid email address';
    }
    
    if (password === '') {
        errors.password = 'Password is required';
    } else if (password.length < 6) {
        errors.password = 'Password should be at least 6 characters long';
    }
     else if (!/\d/.test(password)) {
        errors.password = 'Password must contain atleast one digit';
    }
     else if (!/[a-zA-Z]/.test(password)) {
        errors.password = 'Password must contain atleast one letter';
    }
  else if (!/[!@#$%^&*]/.test(password)) {
        errors.password = 'Password must contain atleast one symbol';
    }
    
    if(!/^\d{10}$/.test(phone)){
        errors.phone = 'Invalid mobile number';
        
    }
    if (city.trim() === '') {
      errors.city = 'City is required';
    }

    setErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  async function handleSubmit  (e)  {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration logic here
      // For simplicity, we'll just log the form data to the console
     
      // Clear form fields
      handleNext();
    }
    try{
      const data={
        name:firstName,
        // last_name:lastName,
        email:email,
        // city:city,
        password:password
        // mobile_no:phone
      };
      const response = await axios.post('http://localhost:8181/api/v1/auth/register', data).then(response=>{console.log(response.data)});
      console.log('Registration successful:', response.data);
      dispatch(login({email}));
      navigate('/');

      
    }
    catch(error){
      console.error("error:",error);
    }
    
  };

  return (
   <div id="outline" style={{paddingTop:'20px'}}>
    <div className="registration-container">
      <h2>Register To Explore!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          
          <input
            type="text"
            placeholder='FirstName'
            id="firstName"
            className='in'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          
          <input
            type="text"
            placeholder='LastName'
            id="lastName"
            className='in'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div className="form-group">
          
          <input
            type="email"
            placeholder='Email'
            id="email"
            className='in'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          
          <input
            type="password"
            placeholder='Password'
            className='in'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="form-group">
          
          <input
            type="text"
            placeholder='Mobile Number'
            id="phone"
            className='in'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
         
          <input
            type="text"
            placeholder='City...'
            className='in'
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <center>
        <Link to="/" style={{color:'white'}} onClick={handleSubmit}><button type="submit">Register</button></Link>
        
        <br></br>
        <Link to='/Login'>Already have an account?</Link>
        </center>
      </form>
    </div>
    </div>
  );
};

export default Register;