import React, {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Cookies from 'universal-cookie';

const FavoritedPets = () => {

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

    const history = useHistory()

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/'))
            .catch(err => console.log(err));
    }

    const cookies = new Cookies();
    const idUsuario = null ?? cookies.get('idUsuario');

    const [loaded, setLoaded] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [favorited, setFavorited] = useState([])
    const [favoritedInfo, setFavoritedInfo] = useState([])

    const [errors, setErrors] = useState({});

    const loadFavs = () => {
        setLoaded(true)
    }

    useEffect(() =>{
        axios.get("http://localhost:8000/api/user/"+idUsuario)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setCity(res.data.city);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setFavorited(res.data.favorited);
                getFavoritedInfo();
            })
            .catch(err =>setErrors(err.response.data.errors));
    }, [loaded])

    const getFavoritedInfo = () => {
        for (let i = 0; i < favorited.length; i++) {
            axios.get("http://localhost:8000/api/friend/"+favorited[i])
                .then(res => setFavoritedInfo(favoritedInfo => [...favoritedInfo, res.data]))
                .catch(err =>setErrors(err.response.data.errors))
            }
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
            <div className="d-flex pt-5 mt-5 justify-content-center">
                <button onClick={loadFavs} className="btn btn-success ">Load Favs</button>
            </div>

            <div className="pt-1 mt-2 text-center dflex">
                {
                    favoritedInfo.map((pet, index)=>(
                        <div className="pettypebox row border-dark justify-content-around mb-4" key={index}>
                            <div className="">
                                <img className="card-img-top pt-4 pb-4" style={{height: '20rem', width: '30rem', objectFit: 'cover'}} src= {pet.image} alt="pet image"></img>
                            </div>
                            
                            <div className="">
                                <h2 className="mt-5">{pet.name}</h2>
                                <div className="row">
                                    <div className="m-2">
                                        <p>Breed: {pet.breed}</p>
                                        <p>Age: {pet.age}</p>
                                        <p>Size: {pet.size}</p>
                                        <p>Gender: {pet.gender}</p>
                                    </div>
                                    <div className="m-2">
                                        <p>Contact Number: ########</p>
                                        <p>email: ########</p>
                                        <p>Location: ########</p>
                                        <p>Shelter's Name: ########</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

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


export default FavoritedPets;