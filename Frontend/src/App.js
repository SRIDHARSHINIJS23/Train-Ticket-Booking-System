
import './App.css';
import AdminLogin from './Components/AdminLogin';
import Register from './Components/Register';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Customersupport from './Components/customersupport';
import Traingp from './Components/Traingp';
import Homepage from './Components/Homepage';
import Selection from './Components/Selection';
import Payment from './Components/Payment';
import Input from './Components/S1';
import Adminhome from './Components/Adminhome';
import AddTrain from './Components/AddTrain';
import DeleteTrain from './Components/DeleteTrain';
import UpdateTrain from './Components/UpdateTrain';
import ManageTrain from './Components/ManageTrain';
import AddClass from './Components/AddClass';
import Feedback from './Components/Feedback';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route index element={<UserLogin/>}/> */}
        <Route index path="/" element={<Homepage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/UserLogin" element={<UserLogin/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path='/customersupport' element={<Customersupport/>}/>
        <Route path='/Traingp' element={<Traingp/>}/>
        <Route path="/Selection" element={<Selection/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        {/* <Route path="/Adminhome" element={<Adminhome/>}/> */}
        <Route path="/AddTrain" element={<AddTrain/>}/>
        <Route path="/UpdateTrain" element={<UpdateTrain/>}/>
        <Route path="/ManageTrain" element={<ManageTrain/>}/>
        <Route path="/AddClass" element={<AddClass/>}/>
        <Route path="/adminHome" element={<Adminhome/>}/>
        <Route path="/DeleteTrain" element={<DeleteTrain/>}/>
        <Route path="/Feedback" element={<Feedback/>}/>

      </Routes>
      </Router>
  );
}

export default App;
