import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return( <>
    <header>
        <nav>
            <ul>
                <li><Link to={"/Home"}>Home</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link> </li>
                <li><Link to="/Contact">Contact Me</Link> </li>
                <li><Link to="/About">About Me</Link> </li>
            </ul>
        </nav>
    </header>

    </>
    )
}

export default Navbar