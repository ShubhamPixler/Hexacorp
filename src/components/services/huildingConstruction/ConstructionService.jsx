import React from "react";
//import './homeServices.scss';
import ConstructionServiceCard from "./ConstructionServiceCard"
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';

import TankCleaning from "./../../../assets/images/con-services-1.png";
import PestControling from "./../../../assets/images/con-services-2.png";
import CleaningHome from "./../../../assets/images/con-services-3.png";
import AgricultureWork from "./../../../assets/images/con-services-4.png";

const ConstructionData = [
    {
        id: 1,
        imageurl : TankCleaning,
        name: "building and Construction"

    },
    {
        id: 2,
        imageurl : PestControling,
        name: "Insulation"
    },
    {
        id: 3,
        imageurl : CleaningHome,
        name: "Wall plaster"
    },
    {
        id: 4,
        imageurl : AgricultureWork,
        name: "Roof insulation"
    },
   
]

const ConstructionServiceData =  ConstructionData.map((item) => 
  <ConstructionServiceCard 
    url={item.imageurl}
    name={item.name} 
  />
 )


export default function ConstructionService () {
    return (
        <>
          <div className="categoriesMain">
              <div className="categoriesTitle">
                  <h2>Building and Construction</h2>
                  <Link to={'/'}>See More</Link>
              </div>
              <div>
                <Grid container spacing={0}>
                    {ConstructionServiceData}
                </Grid>
              </div>
          </div>
        </>
  )   
}