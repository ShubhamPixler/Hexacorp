import React from "react";
import './homeServices.scss';
import Container from '@mui/material/Container';
import HomeServicesCard from "./HomeServicesCard"
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

import TankCleaning from "./../../../assets/images/homeservice-1.png";
import PestControling from "./../../../assets/images/homeservice-2.png";
import CleaningHome from "./../../../assets/images/homeservice-3.png";
import AgricultureWork from "./../../../assets/images/homeservice-4.png";

const homeServiceData = [
    {
        id: 1,
        imageurl : TankCleaning,
        name: "Tank cleaning"

    },
    {
        id: 2,
        imageurl : PestControling,
        name: "Pest Control"
    },
    {
        id: 3,
        imageurl : CleaningHome,
        name: "Cleaning & Home Maids"
    },
    {
        id: 4,
        imageurl : AgricultureWork,
        name: "Agriculture Work"
    },
   
]

const HomeService =  homeServiceData.map((item) => 
  <HomeServicesCard 
    url={item.imageurl}
    name={item.name} 
  />
 )


export default function HomeServices () {
    return (
        <>
          <div className="categoriesMain">
              <div className="categoriesTitle">
                  <h2>Home Services</h2>
                  <Link to={'/'}>See More</Link>
              </div>
              <div>
                <Grid container spacing={0}>
                    {HomeService}
                </Grid>
              </div>
          </div>
        </>
  )   
}