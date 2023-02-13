import React, {useState} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
const App = () => {
 return(
 <Router>
    <div className="app">
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
    </div>
 </Router>
 );
 };

 export default App;