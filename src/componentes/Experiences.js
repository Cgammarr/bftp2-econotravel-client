import React from "react";
import Card from "./Card";

function Experiences({experiences}) {
    return (
        <div className="experiencies">
            <h3>aqui ira el catalogo de experiencias</h3>

            {experiences.map ( e => <Card experience={e} /> )}

        </div>
    )
}


export default Experiences;