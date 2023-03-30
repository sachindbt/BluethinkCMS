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
import Logo from "./Images/Logo.png"
import { IconButton } from '@mui/material';


export default function LoginForm() {

  const instagramLink = "https://www.instagram.com/bluethinkitsoftwarecompany/";
  const facebookLink = "https://www.facebook.com/bluethinkitsoftwarecompany/";
  const linkedinLink = "https://in.linkedin.com/company/bluethinkitconsulting";
  const twitterLink = "https://twitter.com/bluethinkit?lang=en";

 

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


  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();




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

  const { email, password, loginFrom } = user;


  const InstagramLink = ({ link }) => {
    return (
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </IconButton>
    );
  };

  const FacebookLink = ({ link }) => {
    return (
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        <FacebookOutlinedIcon />
      </IconButton>
    );
  };

  const LinkedInLink = ({ link }) => {
    return (
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </IconButton>
    );
  };

  const TwitterLink = ({ link }) => {
    return (
      <IconButton href={link} target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </IconButton>
    );
  };



  return (

    <div className='loginForm'>


      {alertMessage && (
        <Snackbar open={true} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            {alertMessage}
          </Alert>
        </Snackbar>
      )}


      <form onSubmit={handleSubmit} id='login-form'>

        <div className='welcome'>
          <div className='logo'><img src={Logo} /></div>
          <div className='welocme_message'>
            <h1><span>Welcome</span> to Bluethink Portal</h1>

          </div>
        </div>


        <div className='box'>
          <h1 id="Login">LOGIN</h1>

          <div className='main'>
            <TextField
            className='input_itm'
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
          <div>
            <div className='lable_wrap'>
              <TextField
              className='pass_itm'
                label="Password"
                id='password'
                name='password'
                variant='outlined'
                value={user.password}
                onChange={handleInputs}
                required
                type="password"
              />
            </div>
          </div>

          <div className="select">
            <select
              className="form-control"
              id="login_from"
              name="loginFrom"
              value={user.loginFrom}
              onChange={handleInputs}
              required
            >
              <option className="option" value="">
                Select Login From
              </option>
              <option className="option" value="Login From Office">
                Login From Office
              </option>
              <option className="option" value="Login from Home">
                Login From Home
              </option>
            </select>


          </div>
          <div className='logreg'>
            <Button variant='contained' size='small' type='submit' >
              Login
            </Button>
         



            <Button variant='contained' size='small' id='second-button' onClick={navigateToRegister}>
              Register
            </Button>
            <Routes>
              <Route path='/Register' element={<Register />} />
            </Routes>
          </div>


          <div className='forgot'>
            <Button variant='contained' size='small' id='second-button' onClick={navigateToForgotPassword} >
              Forgot Password
            </Button>
          </div>
          <Routes>
            <Route path='/ForgotPassword' element={<ForgotPassword />} />
          </Routes>
          <p id="connect">Connect With Us</p>
          <div className='social-icon'>
            <div className='link_itm'><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
            <div className='face_itm'><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
            <div className='insta_itm'><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
            <div className="twite_itm"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
          </div>

        </div>
      </form>




    </div>
  );
}
