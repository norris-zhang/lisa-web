import Container from '@mui/material/Container';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { checkLogin } from './services/APIService';

function App() {

  const navRef = useRef(useNavigate());
  const locRef = useRef(useLocation());

  useEffect(() => {
    const loginToken = localStorage.getItem('_token');
    console.log(loginToken);
    if (loginToken) {
      checkLogin(loginToken)
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('response status is ' + response.status);
        }
      })
      .then(text => {
        // navRef.current('/classes');
        if (locRef.current.pathname === '/') {
          navRef.current('/classes');
        } else {
          navRef.current(locRef.current.pathname);
        }
      })
      .catch(error => {
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
}

export default App;
