import { useState, useEffect } from 'react';
import { getAuthenticatedUser } from './common';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../utils/app_routes';

export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      /* 
      if (!authenticated) {
        navigate(APP_ROUTES.LOGIN);
        return;
      } 
      */
      setUser(user);
      setAuthenticated(authenticated);
    }
    getUserDetails();
  }, []);

  return { user, authenticated };
}