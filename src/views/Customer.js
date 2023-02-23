import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import "../style/common.css";
import MenuItems from "../component/MenuItems";
import Menu from "../component/Menu";

const Payment = (props) => {
  const addCustomer = () => {
    props.history.push({
      pathname: "/AddCustomer",
    });
  };

  return (
    <div id="content">
      <div>
        <Menu items={MenuItems} prop={props} />
      </div>

      <ChakraProvider>
        <Button h="1.75rem" size="lg" colorScheme="teal" onClick={addCustomer}>
          Add Customer
        </Button>
        <Box
          position="relative"
          h="50vh"
          p={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Card>
            <CardBody>
              <Text>Customer List out here</Text>
            </CardBody>
          </Card>
        </Box>
      </ChakraProvider>
    </div>
  );
};
export default withRouter(Payment);
