import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form } from 'react-bootstrap';


const Contact = (props) => {

    return(<>
        <MyNavbar/>
        <section className="mx-auto" style={{display:"flex", justifyContent:'space-between', textAlign:'center', width:'75%', padding:'50px'}}>
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
                <Form style={{width:'75%'}} className="mx-auto">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label> Your Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write me a message</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <Footer/>
        </>
    )
}



export default Contact;