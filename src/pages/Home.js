import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Home = (props) => {

    return(<>
        <Navbar/>
        <div>
            <Link to={"https://docs.google.com/document/d/1oxoqsUDnObQh2quBDT4kCnPS473Sw28QyVMgdVuL3pU/edit?usp=sharing"}>Click Here For My Resume</Link>
        </div>
        <Footer/>
        </>
    )
}


export default Home;