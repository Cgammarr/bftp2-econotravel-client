import React from "react";
import Card from "./Card";
import {Link} from "react-router-dom";



function Experiences({experiences}) {
    return (

        <div className="experiencies">
            <Link to="/newexperiences">Añadir Experiencias </Link>

            {experiences.map ( e => <Card experience={e} /> )}
            <Link to="/newexperiences">Añadir Experiencias </Link>
        </div>


    )

}
export default Experiences;

