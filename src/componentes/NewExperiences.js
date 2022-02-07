import React from "react";

function NewExperiencies() {
    return (

        <div className="newExperienceForm">
            <input onChange={e => setNewExperience(e.target.value)} type="text"/>
            <button onClick={() => addExperience(newExperience)}>Add experience</button>

            <ul>
                {experiences.map(experience => <li>{experience.name}</li>)}
            </ul>

        </div>
    )
}


export default NewExperiencies;



