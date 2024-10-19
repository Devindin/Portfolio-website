import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Screens/Home/Home";
import WebApplication from "./Screens/WebApplication/WebApplication";
import UIUX from "./Screens/UIUX/UIUX";
import MachineLearning from "./Screens/MachineLearning/MachineLearning"
import JavaProject from "./Screens/JavaProject/JavaProject";

import "./App.css";  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/web-application" element={<WebApplication />} /> 
        <Route path="/ui-ux" element={<UIUX />} /> 
        <Route path="/machine-learning" element={<MachineLearning  />} /> 
        <Route path="/java-project" element={<JavaProject  />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
