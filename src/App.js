import React, { useState } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register";
import Employees from "./views/Employees";
import Rooms from "./views/Rooms";
import Customer from "./views/Customer";
import Payment from "./views/Payment";
import AddCustomer from "./views/AddCustomer";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/Employees" component={Employees} />
        <Route path="/Rooms" component={Rooms} />
        <Route path="/Customer" component={Customer} />
        <Route path="/AddCustomer" component={AddCustomer} />
        <Route path="/Payment" component={Payment} />
      </Router>
    </div>
  );
};

export default App;
