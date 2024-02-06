import React from "react";
import './Home.scss';
import Banner from  "../../components/homeBanner/Banner";
import Brands from  "../../components/brand/Brands";
import Services from "../../components/services/Services";



export default function Home () {
    return (
        <>
        <Banner/>
        <Brands/>
        <Services/>
        {/* <Whatwedo/>
        <Corporate/>
        <AllCategories/>
        <Accordian/>
        <OurClient/>
        <HowItWork/> */}
        </>
  )   
}