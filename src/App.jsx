import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import LoginContext from './pages/auth/LoginContext';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const loginContextValue = { userInfo, setUserInfo };

  const routes = useRoutes(AppRoutes);

  return (
    <LoginContext.Provider value={ loginContextValue }>
      <Container maxWidth="xl">
        { routes }
      </Container>
    </LoginContext.Provider>
  );
};

export default App;
