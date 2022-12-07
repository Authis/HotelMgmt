import ReactDOM from "react-dom";
import React from "react";
import { promises as fsPromises } from 'fs';
const App = () => {
 return <h1>This is my React app!</h1>;
 }
ReactDOM.render(<App />, document.getElementById("app"));