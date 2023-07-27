import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Components/Register';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Bot from './Components/Bot';
import Customersupport from './Components/customersupport';
import Traingp from './Components/Traingp';
import Homepage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Nav from './Components/Nav';
import Selection from './Components/Selection';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Components/features/user';
import Payment from './Components/Payment';
import Input from './Components/S1';
import Hello from './Components/S1';
import getData from './Components/S1';
import Info from './Components/Info';
import NavAdmin from './Components/NavAdmin';
import Adminhome from './Components/Adminhome';
// import AboutUs from './Components/AboutUs';
const store=configureStore({
  reducer:{
    user:userReducer
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <UserLogin/> */}
  {/* <AdminLogin/> */}
  {/* <Register/> */}
  <Provider store={store}>
 {/* <Payment/> */}
 {/* <Input/> */}
 {/* <Sample/> */}
 {/* <Hello/> */}
 {/* <Selection/> */}
{/* <getData/> */}
{/* <Input/> */}
  <App/>
  {/* <NavAdmin/> */}
  {/* <Adminhome/> */}
    </Provider>
  {/* <Bot/> */}
  {/* <Login/> */}
  {/* <Navbar/> */}
  {/* <Nav/> */}
  {/* <Customersupport/> */}
  {/* <Traingp/> */}
  {/* <Homepage/> */}
  {/* <AboutUs/> */}
  {/* <Selection/> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
