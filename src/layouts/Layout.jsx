import { Container } from "@mui/material";
import React from "react";
import AppHeader from "./AppHeader";
import { useRoutes } from 'react-router-dom';
import { LayoutRoutes } from '../routes/AppRoutes';

const Layout = () => {
  const routes = useRoutes(LayoutRoutes);
  return (
    <div>
      <AppHeader></AppHeader>
      <Container>
        {routes}
      </Container>
    </div>
  );
};

export default Layout;