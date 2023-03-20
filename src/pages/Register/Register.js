import React from "react";
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utils/app_routes';

export default function Register() {
    
  const navigate = useNavigate()
  
  return (
  <div>
    <h2>Register</h2>
    <button onClick={()=>navigate(APP_ROUTES.HOME)}>Return</button>
  </div>
  );
}