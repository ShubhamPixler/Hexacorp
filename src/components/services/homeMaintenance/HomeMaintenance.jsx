import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomeMaintenanceCard from "./HomeMaintenanceCard"
import { Link } from "react-router-dom";

import AcService from "./../../../assets/images/category-1.png";
import Plumbing from "./../../../assets/images/category-2.png";
import Electrical from "./../../../assets/images/category-3.png";
import Satellite from "./../../../assets/images/category-4.png";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const serviceData = [
    {
        id: 1,
        imageurl : AcService,
        name: "AC services"

    },
    {
        id: 2,
        imageurl : Plumbing,
        name: "Plumbing Work"
    },
    {
        id: 3,
        imageurl : Electrical,
        name: "Electrical Work"
    },
    {
        id: 4,
        imageurl : Satellite,
        name: "Satellite Technician"
    },
    {
        id: 5,
        imageurl : AcService,
        name: "AC services"
    },
]

const services =  serviceData.map((item) => 
  <HomeMaintenanceCard 
    url={item.imageurl}
    name={item.name} 
  />
 )


export default function categories () {
    return (
        <>
        
            <div className="sectionTitle">
               <h2>Our Categories</h2>
               <p>Categories organize diverse items into distinct groups, facilitating efficient navigation, better organization, and simplified <br/>  understanding, serving various purposes across fields.</p>
            </div>
            <div className="categoriesMain">
                <div className="categoriesTitle">
                   <h2>Home Maintenance </h2>
                   <Link to={'/'}>See More</Link>
                </div>
                <div className="categoriesBox my-own-custom-container">
                    <Carousel responsive={responsive}  infinite={true}  >
                       {services}
                    </Carousel>
                </div>
            </div>
        
        </>
  )   
}