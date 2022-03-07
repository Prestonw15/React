import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Home = (props) => {

    return(<>
        <Navbar/>
        <div style={{textAlign:"center"}}>
            <img src={require('../images/profile.png').default} alt="profile pic" /> <br/>
            <a href="https://docs.google.com/document/d/1oxoqsUDnObQh2quBDT4kCnPS473Sw28QyVMgdVuL3pU/edit?usp=sharing">Click Here For My Resume</a>
        </div>
        <Footer/>
        </>
    )
}


export default Home;