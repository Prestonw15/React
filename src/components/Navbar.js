import React from "react";
import { Link } from "react-router-dom";
import "../index";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return( <>
    <header>
        <nav style={{background:"linear-gradient(#9a8f97 50%,black 100%)", display:'inline-flex', justifyContent:'space-evenly', color:'white', fontSize:'35px', width:'100%'}}>
            <ul style={{display:'inline'}}>
                <li><Link style={{color:'white'}} to={"/Home"}>Home</Link></li>
                <li><Link style={{color:'white'}} to="/Portfolio">Portfolio</Link> </li>
                <li><Link style={{color:'white'}} to="/Contact">Contact Me</Link> </li>
                <li><Link style={{color:'white'}} to="/About">About Me</Link> </li>
            </ul>
        </nav>
    </header>

    </>
    )
}

export default Navbar