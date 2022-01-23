import Container from '@mui/material/Container';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { checkLogin, hasTokenWithinPeriod } from './services/APIService';


function App() {

  const hasCheckedLogin = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!hasCheckedLogin.current) {
      if (hasTokenWithinPeriod()) {
        checkLogin(json => {
          if (location.pathname === '' || location.pathname === '/') {
            navigate('/classes');
          } else {
            navigate(location.pathname);
          }
        }, error => {
          navigate('/login');
        });
      } else {
        navigate('/login');
      }
      hasCheckedLogin.current = true;
    }
  }, [navigate, location]);

  return (
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  );
};

export default App;
