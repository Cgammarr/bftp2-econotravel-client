import React from "react";
import {Link} from "react-router-dom";


function Home() {
    return (
        <div className="home">
            <h3>Naturaleza</h3>
            <h1>Econotravel</h1>
         <Link to="/experiences">Experiencias</Link>
        </div>


    )
}


export default Home;
