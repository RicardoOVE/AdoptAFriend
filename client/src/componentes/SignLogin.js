import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const SignLogin = () => {

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
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const [errorRegistro, setErrorsRegistro] = useState({});
    const [errorLogin, setErrorLogin] = useState("");

    const history = useHistory();

    const registro = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register',{
            firstName,
            lastName,
            city,
            email,
            password,
            confirmPassword
        }, {withCredentials: true})
            .then(res => history.push('/'))
            .catch(err => setErrorsRegistro(err.response.data.errors));
    }

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/login', {
            email: emailLogin,
            password: passwordLogin
        }, {withCredentials: true})
            .then(res => {
                if(res.data.error) {
                    setErrorLogin(res.data.message);
                } else {
                    history.push('/');
                }
            })
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

            <div className="row mt-5 pt-5">
                <form onSubmit={registro} className="singinbox d-flex">
                    <div className="col-7">
                        <div className="form-group">
                            <label htmlFor="firstName">Name</label>
                            <input  type="text" name="firstName" id="firstName" className="form-control" value={firstName} onChange={e=> setFirstName(e.target.value)}/>
                            {errorRegistro.firstName ? <span className="text-danger"> {errorRegistro.firstName.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" name="lastName" id="lastName" className="form-control" value={lastName} onChange={e=> setLastName(e.target.value)}/>
                            {errorRegistro.lastName ? <span className="text-danger"> {errorRegistro.lastName.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input type="city" name="city" id="city" className="form-control" value={city} onChange= {e=> setCity(e.target.value)}/>
                            {errorRegistro.city ? <span className="text-danger"> {errorRegistro.city.message}</span> : null}
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="form-group">
                            <label htmlFor="email">email</label>
                            <input type="email" name="email" id="email" className="form-control" value={email} onChange={e=> setEmail(e.target.value)}/>
                            {errorRegistro.email ? <span className="text-danger"> {errorRegistro.email.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"  id="password" className="form-control" value= {password} onChange={e=> setPassword(e.target.value)}/>
                            {errorRegistro.password ? <span className="text-danger"> {errorRegistro.password.message}</span> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e=> setConfirmPassword(e.target.value)}/>
                            {errorRegistro.confirmPassword ? <span className="text-danger">{errorRegistro.confirmPassword.message}</span> : null}
                        </div>
                    <input type="submit" value="Sign up" className="btn btn-secondary mb-4" />
                    </div>
                </form>
                <div className="col-2"></div>
                <div className="loginbox">
                    <form onSubmit={login} className="col-12">
                        <div className="form-group">
                            <label htmlFor="emailLogin">email</label>
                            <input type="email" name="emailLogin" id="emailLogin" className="form-control" value={emailLogin} onChange={e=>setEmailLogin(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordLogin">Password</label>
                            <input type="password" name="passwordLogin" id="passwordLogin" className="form-control" value={passwordLogin} onChange={e=>setPasswordLogin(e.target.value)} />
                        </div>
                        <div>
                            {errorLogin !== "" ? <span className="text-danger">{errorLogin}</span> : null }
                        </div>
                        <input type="submit" value="Log in" className="btn btn-secondary" />
                    </form>
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

export default SignLogin;