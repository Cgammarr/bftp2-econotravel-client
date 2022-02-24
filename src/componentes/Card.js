npimport React from "react";

import './Card.css';
import {useEffect, useState} from "react";
import "./Card.css";


function Card({experience}) {
    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
n

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE'
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className="contenido">

            <div className="experience-card">
                <div className="contenedor-img"><img className="experienceImg" src={experience.image} alt=""/></div>
                <p>{experience.name}</p>
                <p>{experience.price}</p>
                <p>{experience.duration}</p>
                <p>{experience.accessibility}</p>
                <p>{experience.tags}</p>
                <table>
                    <tbody className="experience-table">
                    <tr className="experienceBtn">
                        <td>
                            <a href="#">Editar</a>
                        </td>
                        <td>
                            <a onClick={() => deleteExperience(experience.id)}>Borrar</a>
                        </td>

                    </tr>

                    </tbody>

                </table>
            </div>
        </div>



    )
}

export default Card;