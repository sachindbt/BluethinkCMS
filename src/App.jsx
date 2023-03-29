import styled from "styled-components";
import Button from "./components/Button";
import Icon from "./components/Icon";
import Input from "./components/Input";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Select from 'react-select'
import Logo from './Logo.png'
// import ParticleBg from "./components/ParticleBg";
// import Dashboard from "./Dashboard";
// import { Routes, Route, useNavigate } from 'react-router-dom';



function App() {
  const options = [
    { value: 'office', label: 'Login From Office' },
    { value: 'home', label: 'Login From Home' }
  ]

  // const navigate = useNavigate();
  // const navigateToDash = () => {
  //   navigate('/Dashboard')
  // }
  
  const MyComponent = () => (
    <Select options={options} />
  )
  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const InstagramBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <MainContainer>
      <img src={Logo} />
      <br></br>
      <WelcomeText><h3>LOG IN</h3></WelcomeText>
      <InputContainer>
        <Input type="text" placeholder="E-mail"  />
        <Input type="password" placeholder="Password" />
      </InputContainer>
      <br></br>
      
      <div className="stylme">
      <b><i>Select Login From:</i></b> <MyComponent />
      </div>
      <ButtonContainer>
        <Button content="Log In" />
      </ButtonContainer>
      <LoginWith>REGISTER!</LoginWith>
      <br></br>
      
      <IconsContainer>
      <b>Contact Us@</b>
        <Icon color={FacebookBackground}>
          <FaFacebookF />
        </Icon>
        <Icon color={InstagramBackground}>
          <FaInstagram />
        </Icon>
        <Icon color={TwitterBackground}>
          <FaTwitter />
        </Icon>
      </IconsContainer>
      <br></br>
      <br></br>
      <ForgotPassword>Forgot Password?</ForgotPassword>
    </MainContainer>    
  );
}

const MainContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
      color: black;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }

  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 1px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 3rem 0rem 0;
  width: 50%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default App;
