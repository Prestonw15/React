import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Contact = (props) => {

    return(<>
        <Navbar/>
        <section className="Social-Platforms">
        <div>
            <h2>Email:</h2>
            <p>prestonwatson.15@gmail.com</p>
        </div>
        <div>
            <h2>Phone Number</h2>
            <p>385-349-6374</p>
        </div>
        <div>
            <h2>Github:</h2>
            <p>Prestonw15</p>
        </div>
        
        </section>
        <Footer/>
        </>
    )
}



export default Contact;