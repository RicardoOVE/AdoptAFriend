import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Donate = props => {

    var bgColors = {
        "grass": "#bad36d",
        "brown": "#e3cd9c",
        "aqua": "#469487",
        "paleblue": "#abd3db",
        "orange": "#faaf6a",
        "pink": "#faaf6a",
        "pale": "#f8f3df",
        "red": "#dc4d41",
        "labrador": "#fbb540"
    };

    const history = useHistory();

    return (
        <div className="w-100" style={{backgroundColor: bgColors.pale}}>
            <Navbar expand="lg" className="text-dark fixed-top d-flex flex-column" style={{backgroundColor: bgColors.pale}}>
                <div className="d-flex flex-row w-75 align-items-center">
                    <Nav.Link href="/" className="d-flex">
                        <img className="ml-1" src="/images/icons/pet-care.png" alt="logo" width="65"/>
                        <h4 className="font-link ml-2 mt-3 text-dark" > Adopt a friend </h4>
                    </Nav.Link>
                </div>
                <Navbar style={{backgroundColor: bgColors.paleblue}} expand="lg" className="w-100">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto d-flex justify-content-around">
                            <Nav.Link href="https://greatergood.org/blog/misc/5-reasons-to-adopt-not-shop" className="mx-4">About Adoption</Nav.Link>
                            <Nav.Link href="/dogcare" className="mx-4">Dog Care</Nav.Link>
                            <Nav.Link href="/catcare" className="mx-4">Cat Care</Nav.Link>
                            <Nav.Link href="/aboutus" className="mx-4">About us</Nav.Link>
                            <Nav.Link href="/donate" className="mx-4">Donate</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Navbar>

            <div className="container mt-5 pt-5">
                <div className="row text-center">
                    <div className="col">
                        <div className="donationbox" >
                            <a href="https://www.worldanimalprotection.org/?gclid=Cj0KCQiAj4ecBhD3ARIsAM4Q_jHbYpbxGXe4yIXS8BnmMEGsfVKcJKIbo6Trumh2PMQfl95lOgdtUmIaAs_EEALw_wcB"> <img src="/images/donation/worldanimalprotection.svg" className="donation"></img></a>
                            <h3>World Animal Protection</h3>
                        </div>
                        <div className="donationbox" >
                            <a href="https://www.soidog.org/content/make-donation"> <img src="/images/donation/soidog.png" className="donation"></img></a>
                            <h3>Soi Dog</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="donationbox" >
                            <a href="https://www.morrisanimalfoundation.org/"> <img src="/images/donation/morrisanimalfoundation.jpg" className="donation"></img></a>
                            <h3>Morris Animal Foundation</h3>
                        </div>
                        <div className="donationbox" >
                            <a href="https://www.akcchf.org/"> <img src="/images/donation/akcchf.png" className="donation"></img></a>
                            <h3>Soi Dog</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="donationbox" >
                            <a href="https://www.greymuzzle.org/"> <img src="/images/donation/greymuzzle.png" className="donation"></img></a>
                            <h3>The Grey Muzzle Organization</h3>
                        </div>
                        <div className="donationbox" >
                            <a href="https://bestfriends.org/"> <img src="/images/donation/bestfriends.jpg" className="donation"></img></a>
                            <h3>Best Friends</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar fixed-bottom text-center text-white" style={{backgroundColor: bgColors.paleblue}}>
                <div className="container pt-3">
                    <div className="mb-2">
                        <a className="mx-3" href="https://www.linkedin.com/in/ricardo-ortiz-v/"><img src="/images/icons/linkedin.png" alt="logo" width="30"/></a>
                        <a className="mx-3" href="https://github.com/RicardoOVE"><img src="/images/icons/github.png" alt="logo" width="30"/></a>
                    </div>
                    <div className="text-center text-dark " style={{backgroundColor: bgColors.paleblue}}> 
                        MERN project for Coding Dojo's Web Development Bootcamp made in 2022 by Ricardo Ortiz
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Donate;