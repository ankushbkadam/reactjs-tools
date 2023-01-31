import React from "react";
import { Route, Routes } from 'react-router';
import { Link, NavLink } from 'react-router-dom'
import { ROUTES } from "../../Constants/routeConstants";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href={ROUTES.HOME}>Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href={ROUTES.HOME} >Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={ROUTES.ABOUT}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;