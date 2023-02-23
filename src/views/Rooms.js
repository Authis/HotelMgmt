import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ChakraProvider,Box, Container, Card, CardHeader, CardBody, CardFooter,Text ,Input,Button} from '@chakra-ui/react';
import "../style/common.css";
import MenuItems from "../component/MenuItems";
import Menu from "../component/Menu"


const Rooms = (props) => {
 
return (
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
            <Text>Rooms List out here</Text>
            
          </CardBody>
        </Card>
        </Box>
   </ChakraProvider>
   </div>
)


};
export default withRouter(Rooms);