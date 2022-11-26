import React from "react";

const NotFound = props => {

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
        <div className="container" style={{backgroundColor: bgColors.pale}}>
            <div className="d-flex flex-column">
                <h1 className="text-center">This is a feature I might add in the future!</h1>
                <img src="/images/notfound.gif"></img>
                <a href="/" className="text-center">Go back to the working site</a>
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

export default NotFound;