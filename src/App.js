
import './App.css';
import useLocalStorage from 'use-local-storage'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Stream from './pages/Stream/Stream';
import Party from './pages/Party/Party';
import Premium from './pages/Premium/Premium';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
import { APP_ROUTES } from './utils/app_routes';


function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Router>
      <div className="App" data-theme={theme}>

        {/* Switch theme */}

        <div>
          <span>{theme} mode</span>
          <button className='ThemeBtn' onClick={switchTheme}>
            Switch to {theme} theme
          </button>
        </div>

        {/* body */}

        <Routes>
          <Route path={APP_ROUTES.STREAM} element={<Stream />} />
          <Route path={APP_ROUTES.PARTY}  element={<Party />} />
          <Route path={APP_ROUTES.PREMIUM} element={<Premium />} />
          <Route path={APP_ROUTES.HOME}  element={<Home />} />
          <Route path={APP_ROUTES.LOGIN}  element={<Login />} />
          <Route path={APP_ROUTES.LOGOUT} element={<Logout />} />
          <Route path={APP_ROUTES.REGISTER}  element={<Register />} />
        </Routes>
      </div>
    </ Router>
  );
}

export default App;
