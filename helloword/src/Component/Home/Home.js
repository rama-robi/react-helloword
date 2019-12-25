import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import './Home.css'


const Home = () => {
  return (
    <Fragment>
      <h1>Judul</h1>
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li ><a href="#about">About</a></li>
      </ul>
      <Container fixed>
        <Typography component="div" style={{backgroundColor: 'red', width:'100%', height: '50vh' }} />
      </Container>
    </Fragment>

  );
};
export default Home;
  