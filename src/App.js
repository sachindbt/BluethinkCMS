import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginForm from './Components/Login Form';
import ForgotPassword from './Components/ForgotPassword';
import Register from "./Components/Register";

function App() {
  return (
    <>
    
     
       <Routes>
        <Route path="/" element={<LoginForm /> } />
          <Route path='/Register' element={<Register />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
      </Routes> 
     
    </>
  );
}

export default App;






























