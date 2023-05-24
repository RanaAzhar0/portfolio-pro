import React from "react";
import Nav from "./component/nav";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Contact from "./pages/contact";
import Hero from "./component/hero";
import Service from "./pages/service";
import Project from "./projects.js/project1";
import Project2 from "./projects.js/project2";
import Project3 from "./projects.js/project3";
import Project4 from "./projects.js/project4";
import Project5 from "./projects.js/project5";
import Project6 from "./projects.js/project6";


function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
     
        <Route path="/" element={<Hero/>}/>
        <Route path="/" element={<Home/>}/> 
        <Route path="/project" element={<Project/>}/>
        <Route path="project2" element={<Project2/>}/>
        <Route path="/project3" element={<Project3/>}/>
        <Route path="/project4" element={<Project4/>}/>
        <Route path="project5" element={<Project5/>}/>
        <Route path="/project6" element={<Project6/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="work" element={<Work/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      
        
    </div>
  );
}

export default App;
