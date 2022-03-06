import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return(
        <Router>
        <div>
            <Route exact path={"/Home"}><Home/></Route>
            <Route exact path={"/About"}><About/></Route>
            <Route exact path={"/Portfolio"}><Portfolio/></Route>
            <Route exact path={"/Contact"}><Contact/></Route>
        </div>
        </Router>
    );
}

export default App;
