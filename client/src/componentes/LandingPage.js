import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

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

import Cookies from 'universal-cookie';

const LandingPage = props => {

    var bgColors = {
        "grass": "#bad36d",
        "brown": "#e3cd9c",
        "aqua": "#469487",
        "paleblue": "#abd3db",
        "orange": "#faaf6a",
        "pale": "#f8f3df",
        "red": "#dc4d41",
        "labrador": "#fbb540",
        "white": "#FFFFFF"
    };

    const dogslide = [dogbanner1, dogbanner2, dogbanner3, dogbanner4, dogbanner5, dogbanner6, dogbanner7, dogbanner8];
    const delay = 6000;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    
    const [carousel, setCarousel] = useState([])
    
    const carouselimager = () => {
        for (let i = 0; i < 8; i++) {
            axios.get('http://localhost:8000/api/random')
            .then(response => response.data)
            .then(data => {
                let petPhoto = data.image
                setCarousel(carousel =>[...carousel, petPhoto])
            })
        }
    }
    
    useEffect(() =>{
        carouselimager();
    }, [])

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

    const history = useHistory()

    const cookies = new Cookies();
    const idUsuario = null ?? cookies.get('idUsuario');

    const logout = () => {
        cookies.remove('idUsuario');
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    
    return (
        <div className="w-100" style={{backgroundColor: bgColors.pale}}>
            <Navbar expand="lg" className="text-dark fixed-top d-flex flex-column" style={{backgroundColor: bgColors.pale}}>
                <div className="d-flex flex-row w-75 align-items-center">
                    <Nav.Link href="/" className="d-flex">
                        <img className="ml-1" src="/images/icons/pet-care.png" alt="logo" width="65"/>
                        <h4 className="font-link ml-2 mt-3 text-dark" > Adopt a friend </h4>
                    </Nav.Link>
                    <div className="ml-auto d-flex row">
                        {!idUsuario ? (
                            <a href="/signlogin" className="btn btn-outline-success ml-2 text-dark">Sing up / Log in</a>
                        ) : 
                        (   
                            <div className="d-flex flex-row">
                                <button className="btn btn-outline-danger text-dark" onClick={logout} >Logout</button>
                                <div>
                                    <a href='/favorited/' className="mx-3"> <img alt="" style={{width:'2rem'}} src="/images/icons/heart.png"></img></a>
                                </div>
                            </div>
                        )
                        }
                    </div>
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
            <div className="slideshow pt-5 mt-2">
                <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                    {dogslide.map((dogimage, index) => (
                    <div className="slide"  key={index}>
                        <img src={dogimage} alt="dogbanner" style={{maxWidth: "100%"}}/>
                    </div>
                    ))}
                </div>
            </div>
            <div style={{backgroundColor: bgColors.paleblue, width: "100%", height: "30px", marginTop: '15px'}}></div>
            
            <form className="mt-3 d-flex justify-content-center">
                <div className="pettypebox">
                    <select className="btn btn-outline-info">
                        <option>Animal</option>
                        <option>Dog</option>
                        <option>Cat</option>
                        <option>Other</option>
                    </select>
                    <select className="btn btn-outline-info">
                        <option>City</option>
                        <option>####</option>
                        <option>####</option>
                        <option>####</option>
                    </select>
                    <button className="btn btn-outline-info"><img width="20" alt="" src="/images/icons/search.png"></img></button>
                </div>
            </form>
            <h6 className="text-danger text-center">*This form is a work in progress feature*</h6>

            <div className="text-center mt-3">   
                <h2>Adopt your new best friend!</h2>
                <h5>Browse pets from our network from local rrescues and shelters</h5>
            </div>
            
            <div className="d-flex justify-content-center text-center">
                <div className="pettypebox m-4 p-2">
                    <a href="/allpets/dogs"> <img alt="" className="pettype" src="/images/icons/dog.png"></img><h4 className="text-dark">Dogs</h4></a>
                </div>
                <div className="pettypebox m-4 p-2">
                    <a href="/allpets/cats"> <img alt="" className="pettype" src="/images/icons/cat.png"></img><h4 className="text-dark">Cats</h4></a>
                </div>
                <div className="pettypebox m-4 p-2">
                    <a href="/notfound"> <img alt="" className="pettype" src="/images/icons/pawprint.png"></img><h4 className="text-dark">Other pets</h4></a>
                </div>
                <div className="pettypebox m-4 p-2">
                    <a href="/addnewpet"> <img alt="" className="pettype" src="/images/icons/add.png"></img><h4 className="text-dark">Add pets</h4></a>
                </div>
            </div>

            {/*
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    {
                        carousel.map((pet, index) =>(
                            <div className="carousel-item" key={index}>
                                <img src={`${pet}`} className="d-block w-100" alt="dog"></img>
                            </div>
                        ))
                    
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
            */}
            <Navbar expand="lg" style={{backgroundColor: bgColors.paleblue}} className="mt-5">
                <div className="text-center pt-3 d-flex justify-content-around w-100" style={{backgroundColor: bgColors.paleblue}}>
                    <div className="mb-2">
                        <a className="mx-3" href="https://www.linkedin.com/in/ricardo-ortiz-v/"><img src="/images/icons/linkedin.png" alt="logo" width="30"/></a>
                        <a className="mx-3" href="https://github.com/RicardoOVE"><img src="/images/icons/github.png" alt="logo" width="30"/></a>
                    </div>
                    <div className="text-center text-dark " style={{backgroundColor: bgColors.paleblue}}> 
                        MERN project for Coding Dojo's Web Development Bootcamp made in 2022 by Ricardo Ortiz
                    </div>
                </div>
            </Navbar>
        </div>
        
    )
}


export default LandingPage;