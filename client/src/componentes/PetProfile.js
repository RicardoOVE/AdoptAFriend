import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';

const PetProfile = () => {

    const {id} = useParams();

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

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("A really friendly and awesome pet to have in your house!");
    const [pettype, setPettype] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [size, setSize] = useState("");
    const [gender, setGender] = useState("");
    const [energy, setEnergy] = useState("");
    const [playfulness, setPlayfulness] = useState("");
    const [training, setTraining] = useState("");
    const [requirements, setRequirements] = useState("");
    const [excercise, setExcercise] = useState("");
    const [friendlinessdogs, setFriendlinessdogs] = useState("");
    const [friendlinesskids, setFriendlinesskids] = useState("");
    const [friendlinessstrangers, setFriendlinessstrangers] = useState("");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/friend/"+id)
            .then(res => {
                setName(res.data.name);
                setImage(res.data.image);
                setDescription(res.data.description);
                setPettype(res.data.pettype);
                setBreed(res.data.breed);
                setAge(res.data.age);
                setSize(res.data.size);
                setGender(res.data.gender);
                setEnergy(res.data.energy);
                setPlayfulness(res.data.playfulness);
                setTraining(res.data.training);
                setRequirements(res.data.requirements);
                setExcercise(res.data.excercise);
                setFriendlinessdogs(res.data.friendlinessdogs);
                setFriendlinesskids(res.data.friendlinesskids);
                setFriendlinessstrangers(res.data.friendlinessstrangers);
            })
            
    }, [id, history])
    /*
    useEffect(()=> {
        axios.get("http://localhost:8000/api/user/" + id)
    })

    const favoritePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000//api/favorite/'+ id, {

        })
    }
    */
    useEffect(()=> {
        console.log(id)
    })
    return (
        <div className="w-100" style={{backgroundColor: bgColors.pale}}>
            <Navbar expand="lg" className="text-dark fixed-top d-flex flex-column" style={{backgroundColor: bgColors.pale}}>
                <div className="d-flex flex-row w-75 align-items-center">
                    <Nav.Link href="/" className="d-flex">
                        <img className="ml-1" src="/images/icons/pet-care.png" alt="logo" width="65"/>
                        <h4 className="font-link ml-2 mt-3 text-dark" > Adopt a friend </h4>
                    </Nav.Link>
                    <div className="ml-auto d-flex row">
                        <button className="btn btn-outline-danger text-dark" onClick={logout} >Logout</button>
                        <a href="/signlogin" className="btn btn-outline-success ml-2 text-dark">Sing up / Log in</a>
                        <div>
                            <a href="/favorited" className="mx-3"> <img style={{width: '2rem'}} src="/images/icons/heart.png"></img></a>
                        </div>
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

            <div className="container mt-5 pt-4" style={{backgroundColor: bgColors.paleblue}}>
                <div className="row">
                    <div className="d-flex flex-column text-center col-6">
                        <img className="card-img-top pt-4" style={{height: '20rem', width: '30rem', objectFit: 'cover'}} src= {image} alt="pet image"></img>
                    </div>
                    <div className="col-6">
                        <h1 className="text-light text-center">{name}</h1>
                        <p className="text-center">{description}</p>
                    </div>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col text-center">
                                <a href="/favorited" className="mx-3"> <img style={{width: '2rem'}} src="/images/icons/heart.png"></img></a>
                                <p>Breed: {breed}</p>
                                <p>Age: {age}</p>
                                <p>Size: {size}</p>
                                <p>Gender: {gender}</p>
                            </div>
                            <div className="col">
                                <div>Energy Level</div>
                                <ProgressBar animated now={energy} label={`${energy}%`}/>
                                <div>Playfulness</div>
                                <ProgressBar animated now={playfulness} label={`${playfulness}%`}/>
                                <div>Ease of training</div>
                                <ProgressBar animated now={training} label={`${training}%`}/>
                                <div>Grooming requirements</div>
                                <ProgressBar animated now={requirements} label={`${requirements}%`}/>
                                </div>
                            <div className="col">
                                <div>Excercise requirements</div>
                                <ProgressBar animated now={excercise} label={`${excercise}%`}/>
                                <div>Friendliness to other pets</div>
                                <ProgressBar animated now={friendlinessdogs} label={`${friendlinessdogs}%`}/>
                                <div>Friendliness to kids</div>
                                <ProgressBar animated now={friendlinesskids} label={`${friendlinesskids}%`}/>
                                <div>Friendliness to strangers</div>
                                <ProgressBar animated now={friendlinessstrangers} label={`${friendlinessstrangers}%`}/>
                            </div>
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

export default PetProfile;