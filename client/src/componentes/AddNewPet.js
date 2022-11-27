import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";


//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const {faker} = require('@faker-js/faker');

const AddNewPet = props => {

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

    const [name, setName] = useState(faker.name.firstName());
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

    const history = useHistory();

    const savePet = () => {
        axios.post("http://localhost:8000/api/addnewpet", {
            name,
            image,
            description,
            pettype,
            breed,
            age,
            size,
            gender,
            energy,
            playfulness,
            training,
            requirements,
            excercise,
            friendlinessdogs,
            friendlinesskids,
            friendlinessstrangers
        })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    const getDogPhoto = () => {
        axios.get('https://dog.ceo/api/breeds/image/random')
            .then(response => response.data)
            .then(data => {
                let dogPhoto = data.message;
                setImage(dogPhoto)
                setTimeout(() => {
                    savePet()
                }, 10)
            })
    }

    const dogFaker = () => {
        setName(faker.name.firstName())
        setPettype("dog")
        setBreed(faker.animal.dog())
        setAge(Math.floor(Math.random()*(15 - 2) + 1))
        setSize("medium")
        setGender(faker.name.sex())
        setEnergy(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setPlayfulness(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setTraining(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setRequirements(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setExcercise(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinessdogs(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinesskids(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinessstrangers(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setTimeout(() =>{
            getDogPhoto()
        }, 10)
    }

    const catFaker = () => {
        setName(faker.name.firstName())
        setImage(faker.image.cats())
        setPettype("cat")
        setBreed(faker.animal.cat())
        setAge(Math.floor(Math.random()*(15 - 2) + 1))
        setSize("medium")
        setGender(faker.name.sex())
        setEnergy(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setPlayfulness(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setTraining(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setRequirements(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setExcercise(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinessdogs(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinesskids(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setFriendlinessstrangers(Math.floor(Math.random()*(100 - 20 + 1) + 20))
        setTimeout(() => {
            savePet()
        }, 10)
    }

    return (
        <div className="w-100" style={{backgroundColor: bgColors.pale}}>
            <Navbar expand="lg" className="text-dark fixed-top d-flex flex-column" style={{backgroundColor: bgColors.pale}}>
                <div className="d-flex flex-row w-75 align-items-center">
                    <Nav.Link href="/" className="d-flex">
                        <img className="ml-1" src="/images/icons/pet-care.png" alt="logo" width="65"/>
                        <h4 className="font-link ml-2 mt-3 text-dark" > AdoptaFriend </h4>
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

            <div className="d-flex flex-column my-5 pt-5">
                <div>
                    <h3>Add a new Dog using Faker API and Dog API!</h3>
                    <button onClick={dogFaker} className="btn btn-secondary">Add Dog</button>
                </div>
                <div>
                    <h3>Add a new Cat using Faker API and Cat as a service API (Catass)!</h3>
                    <button onClick={catFaker} className="btn btn-secondary">Add Cat</button>
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

export default AddNewPet;