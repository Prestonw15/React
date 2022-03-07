import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Portfolio = (props) => {

    return(<>
        <Navbar/>
        <div>
            <a className="Work" href=" https://prestonw15.github.io/RUN-BUDDY/">RUN-BUDDY</a>
            <img className="Runbuddy" src="./Assets/images/Runbuddy.png" alt="Runbuddy homepage"/>
        </div>
        <div>
            <a className="Work" href="https://freeurmindpw.herokuapp.com/">Free Ur Mind</a>
            <img className="FreeUrMind" src="./src/images/2022-02-13.png" alt="Free UR Mind Homepage"/>
        </div>
        <div>
            <a className="Work" href="https://thisismyswamp.herokuapp.com/">Budget-Tracker</a>
            <img className="Budget-Tracker" src="./src/images/2022-02-13.png" alt="Screenshot of Budget-Tracker"/>
        </div>
        <div>
            <a className="Work" href="https://orgesarelikeonions.herokuapp.com/">Tech-Blog</a>
            <img className="FreeUrMind" src="./src/images/2022-02-13.png" alt="Tech-Blog Homepage screenshot"/>
        </div>
        <div>
            <a className="Work" href="https://freeurmindpw.herokuapp.com/">Free Ur Mind</a>
            <img className="FreeUrMind" src="./src/images/2022-02-13.png" alt="Free UR Mind Homepage"/>
        </div>
        <Footer/>
        </>
    )
}



export default Portfolio;