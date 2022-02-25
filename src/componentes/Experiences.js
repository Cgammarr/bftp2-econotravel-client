import React from "react";
import Card from "./Card";
import {Link} from "react-router-dom";
import "./Experiences.css";



function Experiences({experiences}) {
    return (

<div className="experiences">
    {experiences.map ( e => <Card experience={e} /> )}
        {/*
        <div className="newExperiences">
            <Link to="/newexperiences">Añadir Experiencias </Link>
        </div>*/}
</div>

    )

}


export default Experiences;