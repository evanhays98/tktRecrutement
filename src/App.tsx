import React from 'react';
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import Intro from "./Pages/Intro/Intro";
import CompanyInfo from "./Pages/CompanyInfo/CompanyInfo";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/"  element={<Intro/>}/>
                    <Route path="/companiesInfo"  element={<CompanyInfo/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
