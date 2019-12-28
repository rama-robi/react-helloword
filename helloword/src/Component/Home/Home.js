import React, { Display, Fragment } from "react";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './Home.css'
import BlogPost from '../BlogPost/BlogPost';
import Coursel from '../Coursel/Coursel.js';



const Home = () => {
  return (
    <Fragment>
      <h1>IMac Pro</h1>
      <ul>
        <li><a className="active" href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li ><a href="#about">About</a></li>
      </ul>
      <Container fixed>
        <Typography className="hero-image" component="div" style={{backgroundColor: 'gray', width:'100%', height: '50vh' }} />
      </Container>
      <br/>
      <br/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>      
   </Fragment>

  );
};
export default Home;
  