import React from "react";
import './Login.css'
import axios from 'axios';
import { API_ROUTES } from '../../utils/api_routes';
import { APP_ROUTES } from '../../utils/app_routes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../lib/customHooks';
import { storeTokenInLocalStorage } from '../../lib/common';


export default function Login() {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate('/')
  }

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const Submit = () => {
    try {
      if(!(name && password))
        return;

      setIsLoading(true);
      /* 
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
          name,
          password
        }
      }); 
      */
      const response = {data:{user:{name:name}, token:'some_token'}}
      if (!response?.data?.token) {
        console.log('Something went wrong during signing in: ', response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.HOME)
    }
    catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
    finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return <div>Is Loading</div>
  else
    return (
      <div className="Login">
        <form>
          <label>
            <p>Username</p>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" onClick={Submit}>Submit</button>
          </div>
        </form>
      </div>
    );
}




