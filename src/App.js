//import logo from './logo.svg';
import './App.css';
import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from "./Kanbas";
import Assignment4 from "./Labs/a4";
import Assignment5 from "./Labs/a5";

import {HashRouter} from "react-router-dom";
//import { HashRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Project from "./project";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*" element={<Labs/>}/>
          <Route path="/hello" element={<HelloWorld/>}/> 
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/project/*" element={<Project />} />
          <Route path="/Labs/a4" element={<Assignment4 />} />
          <Route path="/Labs/a5" element={<Assignment5 />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
