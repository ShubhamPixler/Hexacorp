import React from "react";
import './Services.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import applicationServiceImage from "./../../assets/images/application.png";
import applicationDataImage from "./../../assets/images/application-1.png";
import applicationText from "./../../assets/images/applicationText.png";
import dataText from "./../../assets/images/dataText.png";
import nextIconWhite from "./../../assets/images/nextWhite.png";
import maskBgGreen from "./../../assets/images/maskBg-1.png";
import maskBlack from "./../../assets/images/maskBg-2.png";
import cloudImage from "./../../assets/images/service-1.png";
import nextIcon from "./../../assets/images/next.png";
import cloudText from "./../../assets/images/cloudText.png";
import rpaText from "./../../assets/images/RPA.png";
import rpaimage from "./../../assets/images/rpa-image.png";

export default function Services () {
    return (
        <>
         <section className="servicesWraper">
            <div className="serviceGroup">
            <Container fixed>
                <div className="Title">
                   <h2>Our Specialized Services</h2>
                </div>
                <Grid container spacing={0}>
                    <Grid item  md={6}>
                        <div className="servicesContentBox">
                          <div className="allappnedFadetitle">
                            <img src={applicationText}/>
                          </div>
                          <div className="servicesContent">
                             <h3>Application Development & <br/> Modernization</h3>
                             <p>Modernize your legacy applications, boost productivity, control costs, and achieve agility for your future-ready business by leveraging our advanced Application management solutions, streamlined migration & modernization.</p>
                             <Link to={'/'} className="nextBnt">Explore More <img src={nextIconWhite}/></Link> 
                          </div>
                        </div>
                    </Grid>
                    <Grid item  md={6}>
                        <div className="serviceImage">
                            <img src={applicationServiceImage}/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            </div>
            
            <div className="cloudDataBgSection" style={{ backgroundImage: 'url('+maskBgGreen+')'}}>
        <Grid container spacing={0}>
                    <Grid item  md={6}>
                        <div className="cloudserviceImage">
                            <img src={cloudImage}/>
                        </div>
                    </Grid>

                    <Grid item  md={6}>
                        <div className="servicesContentBox">
                          <div className="allappnedFadetitle">
                            <img src={cloudText}/>
                          </div>
                          <div className="servicesContent">
                             <h3>Data Engineering and <br/> Analytics</h3>
                             <p>Discover stream of insights into enabling reliable, quick, and ready-to-use cloud-based services to unlock potential business possibilities with our data engineering & analytics for greater innovation & higher performance.</p>
                             <Link to={'/'} className="nextBnt">Explore More <img src={nextIcon}/></Link> 
                          </div>
                        </div>
                    </Grid>
                    
                </Grid>
        </div>
        <div className="serviceGroup">
        <Container fixed>
                <Grid container spacing={0}>
                    <Grid item  md={6}>
                        <div className="servicesContentBox">
                          <div className="allappnedFadetitle">
                            <img src={dataText}/>
                          </div>
                          <div className="servicesContent">
                             <h3>Data Engineering and <br/> Analytics</h3>
                             <p>Discover stream of insights into enabling reliable, quick, and ready-to-use cloud-based services to unlock potential business possibilities with our data engineering & analytics for greater innovation & higher performance.</p>
                             <Link to={'/'} className="nextBnt">Explore More <img src={nextIconWhite}/></Link> 
                          </div>
                        </div>
                    </Grid>
                    <Grid item  md={6}>
                        <div className="serviceImage">
                            <img src={applicationDataImage}/>
                        </div>
                    </Grid>
                </Grid>
                </Container>
         </div>


        



        <div className="cloudDataBgSection" style={{ backgroundImage: 'url('+maskBlack+')'}}>
        <Grid container spacing={0}>
                    <Grid item  md={6}>
                        <div className="cloudserviceImage">
                            <img src={rpaimage}/>
                        </div>
                    </Grid>

                    <Grid item  md={6}>
                        <div className="servicesContentBox">
                          <div className="allappnedFadetitle">
                            <img src={rpaText}/>
                          </div>
                          <div className="servicesContent">
                             <h3>Robotic Process Automation</h3>
                             <p>Navigate systems, identify and extract data, and perform a wide range of defined actions faster and more consistently emulating human actions with our Robotic Process Automation technology.</p>
                             <Link to={'/'} className="nextBnt">Explore More <img src={nextIcon}/></Link> 
                          </div>
                        </div>
                    </Grid>
                    
                </Grid>
        </div>

         </section>
        </>
  )   
}