import React from "react";
import './Brands.scss';
import Container from '@mui/material/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BrandIcon_one from "./../../assets/images/brandIcon-1.png";
import BrandIcon_two from "./../../assets/images/brandIcon-2.png";
import BrandIcon_thee from "./../../assets/images/brandIcon-3.png";
import BrandIcon_four from "./../../assets/images/brandIcon-4.png";
import BrandIcon_five from "./../../assets/images/brandIcon-5.png";
import BrandIcon_six from "./../../assets/images/brandIcon-6.png";
import BrandIcon_seven from "./../../assets/images/brandIcon-7.png";

import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 767 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};


export default function Brands () {
    return (
        <>
         <section className="brandSection">
          <Container fixed>
            <div className="brandTitle">
                <h2>Trusted by 100+ Businesses of all Sizes</h2>
            </div>
            <div className="brandsIconPrnt">
            <Carousel responsive={responsive}  infinite={true}  autoPlay={true} arrows={false}>
                <div class='item'>
                   <div className="brandImage">
                     <img src={BrandIcon_one}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_two}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_thee}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_four}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_five}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_six}/>
                   </div>
                </div>
                <div class='item'>
                <div className="brandImage">
                     <img src={BrandIcon_seven}/>
                   </div>
                </div>
                <div class='item'>
                   <div className="brandImage">
                     <img src={BrandIcon_one}/>
                   </div>
                </div>

                </Carousel>

            </div>
          </Container>
         </section>
        </>
  )   
}