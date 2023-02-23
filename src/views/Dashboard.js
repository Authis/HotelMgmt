import React, { useState,useEffect } from "react";
import { withRouter } from "react-router-dom";
import { ChakraProvider,Box, Container, Card, CardHeader, CardBody, CardFooter,Text ,Input,Button} from '@chakra-ui/react';
import "../style/common.css";
import Menu from "../component/Menu"
import MenuItems from "../component/MenuItems";

const Dashboard = (props) => {
  
return(
  <div id="content">
    <div> <Menu items={MenuItems} prop={props}/></div> 
    <ChakraProvider>
    <Box position="relative"
    h="50vh"
    p={6} display='flex'
    alignItems='center'
    justifyContent='center'>
      <Card>
        <CardBody>
          <Text>Welcome to Hotel Management System</Text>
        </CardBody>
      </Card>
      </Box>
    </ChakraProvider>
  </div>
)

};

export default withRouter(Dashboard);