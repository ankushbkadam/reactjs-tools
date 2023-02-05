import React from "react";
import { Link } from 'react-router-dom'
import { ROUTES } from "../../Constants/routeConstants";
import { IMG_LINK } from "../../Constants/globalLinks";

const Navbar = () => {
      return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
             <Link to={ROUTES.HOME}><img src={IMG_LINK.RGB_BRAND_LOGO} className="navbar-brand nav-logo" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current='page' to={ROUTES.HOME} >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={ROUTES.ABOUT}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
         </nav>
        )
}
export default Navbar;