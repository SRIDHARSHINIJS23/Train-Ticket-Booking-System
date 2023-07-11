import React from 'react';
import './Clogin.css';
import { Link } from 'react-router-dom';
function Login() {
    return ( 
        <div id="outline">
            <div className='container'>
            <form>
            <h1>Are You a...</h1>
            <button>
           <Link to="/UserLogin" style={{color:'white'}}>USER</Link>
           </button>
           <br></br>
           <br></br>
           <button>
            <Link to="/AdminLogin" style={{color:'white'}}>ADMIN</Link>
            </button>
            </form>
            </div>
        </div>
     );
}

export default Login;