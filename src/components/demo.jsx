import React, { useState } from 'react';
import "./CSS/Login Form.css"
import { Button, TextField, Snackbar, Alert, Select, MenuItem } from '@mui/material';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from "./Images/Logo.png"
import Dashboard from './Dashboard';

export default function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    loginFrom: ''
  });

  const [alertMessage, setAlertMessage] = useState('');

  const [data, setAllData] = useState([]);

  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate('/Register')
  }

  const navigateToForgotPassword = () => {
    navigate('/ForgotPassword')
  }

  const navigateToDashboard=()=>{
    navigate('/Dashboard')
  }

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, loginFrom } = user;


    const allData = {
      email,
      password,
      loginFrom
    };
    setAllData([allData]);
    setUser({ email: '', password: '', loginFrom: '' });
    setAlertMessage('Login successful.');
  };

  const handleAlertClose = () => {
    setAlertMessage('');
  };



  return (
    <div className='loginForm'>
      <img src={Logo} className="logo" />

      {alertMessage && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}

      <form onSubmit={handleSubmit} id='login-form'>
        <h1 id="Login">LOGIN</h1>

        <div >
          <TextField
            label="Email"
            id='email'
            name='email'
            type="email"
            variant='outlined'
            value={user.email}
            onChange={handleInputs}
            required
          />
        </div>
        <br />
        <div>
          <TextField
            label="Password"
            id='password'
            name='password'
            variant='outlined'
            value={user.password}
            onChange={handleInputs}
            required
          />
        </div>
        <br />

        <div>
          <select class="form-control" id="login_from" name="login_from" required>
            <option value="">Select Login From</option>
            <option value="0">Login From Office</option>
            <option value="1">Login From Home</option>
          </select>
          <br />
          <br />
        </div>
        <Button variant='contained' size='small' type='submit' onClick={navigateToDashboard} >
          Login
        </Button>
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>



        <Button variant='contained' size='small' id='second-button' onClick={navigateToRegister}>
          Register
        </Button>
        <Routes>
          <Route path='/Register' element={<Register />} />
        </Routes>


        <br />
        <br />


        <Button variant='contained' size='small' id='second-button' onClick={navigateToForgotPassword} >
          Forgot Password
        </Button>
        <Routes>
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
        </Routes>
        <h1>Welcome to Bluethink Portal</h1><br></br>
        <p><b>Connect With Us</b></p>
        <LinkedInIcon />
        <FacebookOutlinedIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YouTubeIcon />
      </form>



    </div>
  );
}
