import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = (props) => {

    return(<>
        <MyNavbar/>
        <h1 style={{textAlign:'center'}}>About Me</h1>
        <div style={{width:'75%', padding:'10px', fontSize:'20px'}}>
            I'm a 24 yr old male, who just finsihed studying code at University of Utah! I'm Now a Certified FUll-Stack Developer and can use multiple languages and database to help me build my applications.
            Some of the things I enjoy are:
            <ul>
                <li>Playing Basketball</li>
                <li>Playing Video Games</li>
                <li>Spending Time with Family</li>
                <li>Working Out</li>
                <li>Spending Time with My Girlfriend</li>
            </ul>
            I Also Come from a really big family, I have 9 younger siblings of which I'm the oldest. I goal is to work towards coding and programming in the Video games Field, and would one Day Really like to work for Bethesda Game Studios!

            If you have Any questions about me feel free to checkout the contact Page to reach out.
        </div>
        <Footer/>
    </>
    )
}

export default About;