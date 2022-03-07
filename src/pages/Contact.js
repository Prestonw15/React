import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Contact = (props) => {

    return(<>
        <Navbar/>
        <section className="Social-Platforms" style={{display:"flex", justifyContent:'space-between', textAlign:'center', width:'75%', padding:'50px'}}>
        <div>
            <h2>Email:</h2>
            <a href="mailto:prestonwatson.15@gmail.com">prestonwatson.15@gmail.com</a>
        </div>
        <div>
            <h2>Phone Number</h2>
            <p>385-349-6374</p>
        </div>
        <div>
            <h2>Github:</h2>
            <a href="https://github.com/Prestonw15">Prestonw15</a>
        </div>
        
        </section>
        <Footer/>
        </>
    )
}



export default Contact;