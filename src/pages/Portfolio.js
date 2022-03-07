import React from "react";
import MyNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Runbuddy from "../images/Runbuddy.png";


const Portfolio = (props) => {

    return(<>
        <MyNavbar/>
        <section style={{backgroundColor:'#9a8f97', height:'100%', display:'flex', justifyContent:'space-evenly'}}>
            <div>
                {/* <a className="Work" href=" https://prestonw15.github.io/RUN-BUDDY/">RUN-BUDDY</a>
                <img className="Runbuddy" src="./Assets/images/Runbuddy.png" alt="Runbuddy homepage"/> */}
        <Card Link="https://prestonw15.github.io/RUN-BUDDY/" pic={Runbuddy} alt="Runbuddy homepage" repo="" name="Run-Buddy" />
                {/* <a className="Work" href="https://freeurmindpw.herokuapp.com/">Free Ur Mind</a>
                <img className="FreeUrMind" src="./src/images/freeurmind.png" alt="Free UR Mind Homepage"/> */}
        <Card Link="https://freeurmindpw.herokuapp.com/" pic={Runbuddy} alt="Freeurmind" />
                <a className="Work" href="https://thisismyswamp.herokuapp.com/">Budget-Tracker</a>
                <img className="Budget-Tracker" src="./src/images/2022-02-13.png" alt="Screenshot of Budget-Tracker"/>
           
                <a className="Work" href="https://orgesarelikeonions.herokuapp.com/">Tech-Blog</a>
                <img className="Tech-Blog" src="./src/images/2022-02-13.png" alt="Tech-Blog Homepage screenshot"/>
            
                <a className="Work" href="https://battlestats.herokuapp.com/">BATTLESTATS</a>
                <img className="BATTLESTATS2.0" src="./src/images/BATTLESTATS.png" alt="BATTLESTATS login page"/>
            </div>
        </section>
        <Footer/>
        </>
    )
}



export default Portfolio;