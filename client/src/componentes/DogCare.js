import React from "react";

//import Container from 'react-bootstrap/Container';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const DogCare = props => {

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
                <div className="embed-responsive embed-responsive-16by9 col">
                    <iframe title="dogCare" className="embed-responsive-item" src="https://www.youtube.com/embed/Tn3lZE0rRBs" allowfullscreen></iframe>
                </div>
                <div className="col text-justify m-4">
                    <h2 className="mb-3">How to care for a dog:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis convallis convallis tellus id interdum velit laoreet id. Feugiat nisl pretium fusce id velit ut. Et netus et malesuada fames ac turpis egestas integer. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Semper quis lectus nulla at volutpat diam. Enim ut tellus elementum sagittis. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Vel pretium lectus quam id leo. Tempus urna et pharetra pharetra massa massa ultricies mi. Morbi tristique senectus et netus et malesuada fames. Tortor aliquam nulla facilisi cras fermentum odio eu. Sed tempus urna et pharetra.
                    </p>
                    <p>
                        Senectus et netus et malesuada fames ac turpis egestas. Enim nunc faucibus a pellentesque sit amet. Nunc scelerisque viverra mauris in aliquam. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Urna molestie at elementum eu facilisis sed. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida neque. Semper quis lectus nulla at volutpat diam ut venenatis. Mi tempus imperdiet nulla malesuada pellentesque.
                    </p>
                </div>
            </div>


            <div className="navbar fixed-bottom text-center text-white" style={{backgroundColor: bgColors.paleblue}}>
                <div className="container pt-3">
                    <div className="mb-1">
                        <a className="mx-3" href="https://www.linkedin.com/in/ricardo-ortiz-v/"><img src="/images/icons/linkedin.png" alt="logo" width="30"/></a>
                        <a className="mx-3" href="https://github.com/RicardoOVE"><img src="/images/icons/github.png" alt="logo" width="30"/></a>
                    </div>
                    <div className="text-center text-dark" style={{backgroundColor: bgColors.paleblue}}> 
                        MERN project for Coding Dojo's Web Development Bootcamp made in 2022 by Ricardo Ortiz
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DogCare;