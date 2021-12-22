import Container from '@mui/material/Container';
import { useState } from 'react';
import './App.css';
import Login from './components/auth/Login';
import Classes from './components/teacher/Classes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const loginHandler = () => {
    console.log('logged in.');
    setLoggedIn(true);
  };
  return (
    <Container maxWidth="sm">
      { loggedIn ? (
          <Classes />
        ) : 
        (
          <Login onLogin={loginHandler} />
        )
      }
    </Container>
  );
}

export default App;
