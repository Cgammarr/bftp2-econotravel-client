import './App.css';
import React, {useEffect, useState} from "react";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./componentes/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ReservaYa from "./componentes/ReservaYa";
import NewExperienceForm from "./componentes/NewExperienceForm";
import Experiences from "./componentes/Experiences";
import SobreNosotras from "./componentes/SobreNosotras";


function App() {

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



    return (



        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/sobrenosotras" element={<SobreNosotras />} />
                <Route path="/reservaya" element={<ReservaYa />} />
                <Route path="/newexperiences" element={<NewExperienceForm/>} />
                <Route path="/experiences" element={<Experiences experiences={experiences} />} />
                <Route path='*' element={<Navigate reaplace to="/" />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default App;

