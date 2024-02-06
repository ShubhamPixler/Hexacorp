import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import userIcon from "./../../assets/images/user.png";
import shopIcon from "./../../assets/images/shop.png";
import yellowStar from "./../../assets/images/star.png";
import blueStar from "./../../assets/images/bluestar.png";

export default function Corporate () {
    return (
        <>
         <section className="corporateSection">
          <Container fixed>
          <Grid container spacing={4}>
              <Grid item  md={6}>
                  <div className="fixelloContent">
                      <div className="personalProfile">
                        <img src={userIcon}/>
                      </div>
                      <div className="SectionTitle">
                         <h2>Fixello Personal</h2>
                         <p>Fixello Maintenance Services for Individuals.</p>
                      </div>
                      <ul>
                          <li><span> <img src={yellowStar}/> </span> Our App will save you time while looking for your needed service and the solutions, just a tap away!</li>
                          <li><span> <img src={yellowStar}/> </span> Browse through skilled service providers, read reviews, and pick the one that clicks with you. It's your call, literally!</li>
                          <li><span> <img src={yellowStar}/> </span> Say goodbye to waiting. With FIXELLO, getting services is as easy as texting a friend</li>
                      </ul>
                  </div>
              </Grid>
              <Grid item  md={6}>
              <div className="fixelloContent">
                      <div className="corporateProfile">
                        <img src={shopIcon}/>
                      </div>
                      <div className="SectionTitle">
                         <h2>Fixello Corporate</h2>
                         <p>Fixello Services and Packages For Businesses.</p>
                      </div>
                      <ul>
                          <li><span> <img src={blueStar}/> </span> Fixello offers a world of tailored service packages for businesses with different needs.</li>
                          <li><span> <img src={blueStar}/> </span> From essential repairs to specialized expertise, find what you need from our wide selection of service categories</li>
                          <li><span> <img src={blueStar}/> </span> Contact us for more information on our exclusive business service packages.</li>
                        </ul>
                  </div>
              </Grid>
          </Grid>
          </Container>
         </section>
        </>
  )   
}