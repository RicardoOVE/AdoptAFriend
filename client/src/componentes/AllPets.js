import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Cookies from 'universal-cookie';

const AllPets = () => {

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

    const {pettypes} = useParams();
    const [pets, setPets] = useState([])

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/" + pettypes, {withCredentials: true})
            .then(res => setPets(res.data))
            .catch(err => {
                if(err.response.status === 401) {
                    history.push('/signlogin');
                }
            });
    }, [history])

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    const cookies = new Cookies();
    const idUsuario = null ?? cookies.get('idUsuario');

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
                                <a href="/favorited" className="mx-3"> <img style=  {{width:'2rem'}} src="/images/icons/heart.png"></img></a>
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
            
            <div className="d-flex row justify-content-between pt-5 mt-5 text-center"> 
                {
                    pets.map((pet, index)=>(
                        <div className="card border-dark my-4" style={{width: '13rem', height: '30rem'}} key={index}>
                            <img className="card-img-top" style={{height: '18rem', objectFit: 'cover'}} src={pet.image} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{pet.name} - {pet.age}</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{pet.breed}/{pet.gender}</li>
                                </ul>
                                <a href={`/pet/${pet._id}`} className="btn btn-outline-dark">Check this pet</a>
                            </div>
                        </div>
                    ))
                }
            </div>

            <Navbar expand="xl" style={{backgroundColor: bgColors.paleblue}}>
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

export default AllPets;