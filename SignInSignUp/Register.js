import React, { useState } from 'react';
import './Register.css'; 
import { Link } from 'react-router-dom';
function Register(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform registration logic here
      // For simplicity, we'll just log the form data to the console
      console.log({
        firstName,
        lastName,
        email,
        password,
        phone,
        city
      });

      // Clear form fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setCity('');
      setErrors({});
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="form-group">
          
          <input
            type="password"
            placeholder='Password'
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>
        <div className="form-group">
         
          <input
            type="text"
            placeholder='City...'
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>
        <center>
        <button type="submit"><Link to="/" style={{color:'white'}}>Register</Link></button>
        
        <br></br>
        <Link to='/Login'>Already have an account?</Link>
        </center>
      </form>
    </div>
    </div>
  );
};

export default Register;