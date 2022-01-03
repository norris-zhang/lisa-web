import Container from '@mui/material/Container';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { checkLogin } from './services/APIService';

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

function App() {

  const navRef = useRef(useNavigate());
  const locRef = useRef(useLocation());

  useEffect(() => {
    const loginToken = localStorage.getItem('_token');
    const lastLogin = localStorage.getItem('lastLogin');

    if (hasTokenWithinPeriod(loginToken, lastLogin)) {
      checkLogin(loginToken, json => {
        // navRef.current('/classes');
        if (locRef.current.pathname === '/') {
          navRef.current('/classes');
        } else {
          navRef.current(locRef.current.pathname);
        }
      }, error => {
        navRef.current("/login");
      });
    } else {
      navRef.current("/login");
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  );
};

const hasTokenWithinPeriod = (loginToken, lastLogin) => {
  if (!loginToken) {
    return false;
  }
  if (!lastLogin) {
    return false;
  }
  let milli = parseInt(lastLogin);
  if (isNaN(milli)) {
    return false;
  }
  let now = new Date();
  let lastLoginDate = new Date(milli);
  if (now - lastLoginDate > THIRTY_DAYS) {
    return false;
  }
  return true;
};

export default App;
