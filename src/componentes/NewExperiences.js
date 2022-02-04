<div className="newExperienceForm">
    <input onChange={e => setNewExperience(e.target.value)} type="text"/>
    <button onClick={() => addExperience(newExperience)}>Add experience</button>
</div>

<ul>
    {experiences.map(experience => <li>{experience.name}</li>)}
</ul>