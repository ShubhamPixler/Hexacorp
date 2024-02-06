import React from "react";
import './Banner.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import bannerImage from "./../../assets/images/homeBanner.png";
import playIcon from "./../../assets/images/play.png";
import nextIcon from "./../../assets/images/next.png"

export default function Banner () {
    return (
        <>
         <section className="bannerSection" style={{ backgroundImage: 'url('+bannerImage+')'}}>
          <Container fixed>
          <Grid container spacing={0} >
              <Grid item  md={6} >
                  <div className="bannerContent ">
                      <div className="bannerTitle">
                          <h1>Application Management <br/> & Modernization</h1>
                          <p>Application Management and Modernization play pivotal roles in the dynamic landscape of information technology, software applications remain robust.</p>
                      </div>
                      <div className="bannerBtn">
                         <Link to={'/'} className="vidoeBtn"><img src={playIcon}/>Play a Video</Link> 
                         <Link to={'/'} className="nextBnt">Who We Are <img src={nextIcon}/></Link> 
                      </div>
                  </div>
              </Grid>
              <Grid item  md={6}>
                
              </Grid>
          </Grid>
          </Container>
         </section>
        </>
  )   
}