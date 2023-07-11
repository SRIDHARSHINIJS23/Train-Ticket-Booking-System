import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
function UserLogin() {
    return (<>
    <div className="top1">
      <div className="container" >
      <form>
      <h1>Login</h1>
        <input type="text" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <center>
        <button type="submit"><Link to="/" style={{color:'white'}}>Login</Link></button>
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