import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import { checkLogin } from './services/APIService';

function App() {

  const navigate = useNavigate();

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
        navigate("/classes");
      })
      .catch(error => {
        navigate("/login");
      });
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <Container maxWidth="sm">
      <Outlet />
    </Container>
  );
}

export default App;
