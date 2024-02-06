import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Logo from "./../../assets/images/logo.png";


export default function Header() {
    return (
      <>
          <header className="mainHeader">
          <Container fixed>

            <div className="navbar">
                    <div className="logo"> 
                       <Link to={'/'}><img src={Logo}/></Link>
                    </div>
                 <div className="headermenu">
                    <div className='menus'>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/'}>Services</Link></li>
                            <li><Link to={'/'}>Partners</Link></li>
                            <li><Link to={'/'}>Industries</Link></li>
                            <li><Link to={'/'}>Corporate</Link></li>
                            <li><Link to={'/'}>Career</Link></li>
                        </ul>
                     </div>
                     <div className="contactusButton">
                       <Link to={'/'} className="btn"> Contact us</Link> 
                     </div>
                 </div>
            </div>
            </Container>
        </header>
      </>
    )
}