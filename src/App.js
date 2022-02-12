import React from 'react';
import { useRoutes } from 'react-router-dom';
import Container from '@mui/material/Container';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {

  const routes = useRoutes(AppRoutes());

  return (
    <Container maxWidth="sm">
      { routes }
    </Container>
  );
};

export default App;
