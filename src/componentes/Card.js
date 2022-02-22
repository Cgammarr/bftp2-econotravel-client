import React from "react";
import './Card.css';
function Card({experience}) {
    return (

        <div className="contenido">
            <div className="experience-card">
                <img className="experienceImg" src={experience.image} alt=""/>
                <p>{experience.name}</p>
                <p>{experience.price}</p>
                <p>{experience.duration}</p>
                <p>{experience.accessibility}</p>
                <p>{experience.tags}</p>
            </div>
        </div>

    )
}

export default Card;