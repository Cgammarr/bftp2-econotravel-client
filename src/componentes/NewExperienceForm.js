import React from "react";


function NewExperienceForm(setNewExperience, experiences) {
    const addExperience = (experienceName) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName})
            }
        ).then(_ => setRequiresUpdate(true))

    }
    return (

         <div className="newExperienceForm">
             <input  type="text"/>
             <button onClick={addExperience} >  experience</button>


         </div>
    );
}


export default NewExperienceForm;



