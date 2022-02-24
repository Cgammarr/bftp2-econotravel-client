import React, {useState} from "react";
import Form from 'react-bootstrap/Form';


function NewExperienceForm() {
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);

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

             <Form>
                 <>
                     <Form.Select size="sm">
                         <option>Small select</option>
                     </Form.Select>
                 </>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Experiencia</Form.Label>
                     <Form.Control type="name" placeholder="Introduce el nombre de la experiencia" />

                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Nombre</Form.Label>
                     <Form.Control type="nombre" placeholder="Introduce tu nombre" />

                 </Form.Group>




                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                         We'll never share your email with anyone else.
                     </Form.Text>
                 </Form.Group>


                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                 </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
                 </Form.Group>
                 <button onClick={addExperience} variant="primary" type="submit" >
                     Añadir
                 </button>
             </Form>

         </div>
    );
}


export default NewExperienceForm;



