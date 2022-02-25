import React from "react";
import {useEffect, useState} from "react";


import './Card.css';


function Card({experience}) {
    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);


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
        <div className="card-page">
        <div className="card-container">
            <div className="card">
                <div className="card__header">
                    <img className="card__image" src={experience.image} alt="card__image" width="600"/>
                </div>

                <div className="card__body">

                    <p>{experience.name}</p>
                    <div className="small-info">
                    <p>Precio: {experience.price}€</p><p>Duración: {experience.duration}h</p>
                    </div>
                    <small>{experience.accessibility}</small>
                </div>


                <div className="card__footer">
                    <div className="user">
                        <div className="user__info">
                            <small>{experience.tags}</small>

                            <div className="experienceBtn">
                                <span className="tag tag-blue" href="#">Editar</span>
                                <span className="tag tag-red" href="#" onClick={() => deleteExperience(experience.id)}>Borrar</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Card;