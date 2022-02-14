import React from "react";

function Card({experience}) {
    return (
        <div className="experience-card">
            <p>{experience.name}</p>
            <p>{experience.price}</p>

        </div>
    )
}


export default Card;

