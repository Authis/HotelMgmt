import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ChakraProvider,Box, Container, Card, CardHeader, CardBody, CardFooter,Text ,Input,Button} from '@chakra-ui/react';
import "../style/common.css";

const Dashboard = (props) => {


return(
  <ChakraProvider>
      <div id="content">
        <div id="left">
                <div class="vertical-menu">
                  <a href="#" class="active">Home</a>
                  <a href="#">Customers</a>
                  <a href="#">Rooms</a>
                  <a href="#">Employees</a>
                  <a href="#">Payments</a>
                </div>
        </div>
        <div id="right">
           <div id="object3">unas cosas</div>
           <div id="object4">mas cosas para ti</div>
        </div>
      </div>
  </ChakraProvider>
)

};

export default withRouter(Dashboard);