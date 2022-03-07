import React from "react";
import { Link } from "react-router-dom";
import "../index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const myStyle = {
        height: "15%",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "darkGrey",
        padding: "10px",
    }
    return( <>
    <header>
        <nav style={myStyle}>
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