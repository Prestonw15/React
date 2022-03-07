import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Runbuddy from "../images/Runbuddy.png";
import freeurmind from "../images/freeurmind.png";
import BATTLESTATS from "../images/BATTLESTATS.png";
import tech from "../images/tech-blog.png";
import Budget from "../images/budget.png";
import Weather from "../images/weather.png";

const Portfolio = (props) => {

    return(<>
        <MyNavbar/>
        <section style={{backgroundColor:'#9a8f97', height:'100%', display:'flex', justifyContent:'space-evenly'}}>
            <div>

        <Card Link="https://prestonw15.github.io/RUN-BUDDY/" pic={Runbuddy} alt="Runbuddy homepage" repo="https://github.com/Prestonw15/RUN-BUDDY" name="Run-Buddy" />

        <Card Link="https://freeurmindpw.herokuapp.com/" pic={freeurmind} alt="Freeurmind" repo="https://github.com/Prestonw15/freeurmind" name="FreeUrMind"/>

        <Card Link="https://thisismyswamp.herokuapp.com/" pic={Budget} alt="Budget-Tracker" repo="https://github.com/Prestonw15/Budget-Tracker" name="Budget-Tracker"/>  

        <Card Link="https://orgesarelikeonions.herokuapp.com/" pic={tech} alt="Tech-Blog" repo="https://github.com/Prestonw15/tech-blog" name="Tech-Blog"/>  

        <Card Link="https://battlestats.herokuapp.com/" pic={BATTLESTATS} alt="BATTLESTATS" repo="https://github.com/Prestonw15/BATTLESTATS2.0" name="BATTLESTATS"/>

        <Card Link="https://prestonw15.github.io/Weather-Dashboard/" pic={Weather} alt="Weather-api" repo="https://github.com/Prestonw15/Weather-Dashboard" name="Weather-Api"/>  
            </div>
        </section>
        <Footer/>
        </>
    )
}



export default Portfolio;