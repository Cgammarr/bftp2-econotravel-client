import React from "react";

function Card({experience}) {
    return (
        <div className="contenido">
        <div className="experience-card">
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