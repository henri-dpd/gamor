import React from "react";
import {storeTokenInLocalStorage} from '../../lib/common';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../utils/app_routes';

export default function Logout() {
    
  storeTokenInLocalStorage('');
  const navigate = useNavigate()
  
  return (
  <div>
    <h2>Logout</h2>
    <button onClick={()=>navigate(APP_ROUTES.HOME)}>Return</button>
  </div>
  );
}
