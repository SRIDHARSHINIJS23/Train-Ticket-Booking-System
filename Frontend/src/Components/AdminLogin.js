import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
function AdminLogin() {
    return ( 
        <>
        <div className="top1">
      <div className="container" >
      <form>
      <h1>Admin Login</h1>
        <input type="text" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <center>
        <Link to="/Adminhome" style={{color:'white'}}><button type="submit">Login</button></Link>
        <br></br>
        <Link to='/UserLogin'>Are you a User?Login</Link>
        </center>
       
      </form>
      </div>
    </div>
        </>
     );
}

export default AdminLogin;