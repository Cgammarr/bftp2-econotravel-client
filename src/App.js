import './App.css';
import React, {useEffect, useState} from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReservaYa from "./componentes/ReservaYa";
import NewExperiences from "./componentes/NewExperiences";
import Experiences from "./componentes/Experiences";
import SobreNosotras from "./componentes/SobreNosotras";

function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

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



        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/sobrenosotras" element={<SobreNosotras />} />
                <Route path="/reservaya" element={<ReservaYa />} />
                <Route path="/newexperiences" element={<NewExperiences/>} />
                <Route path="/experiences" element={<Experiences experiences={experiences} />} />
                <Route path='*' element={<Navigate reaplace to="/" />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default App;

