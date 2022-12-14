import React, { useEffect } from 'react';

import { Typography } from "@mui/material"
import { useRouteError, useNavigate } from "react-router-dom";

import Content from '../components/Content/Content'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const NotFound = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Header />
      <Content >
        <Typography variant="h1" sx={{ textAlign: "center" }} component="h2" >
          {error.statusText}
        </Typography>
      </Content>
      <Footer />
    </>
  )
}

export default NotFound