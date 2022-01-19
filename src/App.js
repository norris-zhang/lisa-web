import Container from '@mui/material/Container';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { checkLogin, hasTokenWithinPeriod } from './services/APIService';


function App() {

  const navRef = useRef(useNavigate());
  const locRef = useRef(useLocation());

  useEffect(() => {
    if (hasTokenWithinPeriod()) {
      checkLogin(json => {
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

export default App;
