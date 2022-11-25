import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import dogbanner1 from "../images/dogbanner/1.jpg"
import dogbanner2 from "../images/dogbanner/2.jpg"
import dogbanner3 from "../images/dogbanner/3.jpg"
import dogbanner4 from "../images/dogbanner/4.jpg"
import dogbanner5 from "../images/dogbanner/5.jpg"
import dogbanner6 from "../images/dogbanner/6.jpg"
import dogbanner7 from "../images/dogbanner/7.jpg"
import dogbanner8 from "../images/dogbanner/8.jpg"


const LandingPage = props => {

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

    const dogslide = [dogbanner1, dogbanner2, dogbanner3, dogbanner4, dogbanner5, dogbanner6, dogbanner7, dogbanner8];
    const delay = 6000;
    
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === dogslide.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="container" style={{backgroundColor: bgColors.pale}}>
            <div className="col-14">
            <Navbar expand="lg" className="text-dark" style={{backgroundColor: bgColors.pale}}>
                <img className="ml-1" src="/images/icons/pet-care.png" alt="logo" width="65"/>
                <h4 className="font-link ml-4" > AdoptaFriend </h4>
                <Nav.Link href="#signlogin" className="ml-auto">Sing up / Log in</Nav.Link>
            </Navbar>

            <Navbar style={{backgroundColor: bgColors.paleblue}} expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto d-flex justify-content-around">
                        <Nav.Link href="#dogcare" className="mx-4">Dog Care</Nav.Link>
                        <Nav.Link href="#catcare" className="mx-4">Cat Care</Nav.Link>
                        <Nav.Link href="#about" className="mx-4">About us</Nav.Link>
                        <Nav.Link href="#donate" className="mx-4">Donate</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="slideshow">
                <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {dogslide.map((dogimage, index) => (
                    <div className="slide"  key={index}>
                        <img src={dogimage} alt="dogbanner" style={{maxWidth: "100%"}}/>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{backgroundColor: bgColors.paleblue, width: "100%", height: "5px"}}></div></div>
        </div>
        
    )
}


export default LandingPage;