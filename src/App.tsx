import React from 'react';
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import Intro from "./Pages/Intro/Intro";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/"  element={<Intro/>}/>

                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
