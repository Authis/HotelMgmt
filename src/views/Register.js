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
import registerUser from "../services/RegService";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");

  const handleName = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleDob = (event) => setDob(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleConfPassword = (event) => setConfpassword(event.target.value);

  async function registerAction(userdetails, history) {
    console.log("response>>>>>out   >>" + userdetails.username);
    try {
      const regStatus = await registerUser(userdetails);
      console.log(">>>>>>>>>>> : " + JSON.stringify(regStatus));

      history.push({
        pathname: "/",
      });
    } catch (e) {
      console.log("Exception : " + e);
    }
  }

  console.log("username :" + username, email);
  return (
    <ChakraProvider>
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
            <Text>Fill your Details:</Text>
            Name(s) :{" "}
            <Input
              value={username}
              onChange={handleName}
              placeholder="User Name"
            />
            Email :{" "}
            <Input value={email} onChange={handleEmail} placeholder="Email" />
            DOB : <Input value={dob} onChange={handleDob} placeholder="Email" />
            Password :{" "}
            <Input
              value={password}
              onChange={handlePassword}
              placeholder="Email"
            />
            Confirm Password :{" "}
            <Input
              value={confpassword}
              onChange={handleConfPassword}
              placeholder="Email"
            />
            <Button
              h="1.75rem"
              size="lg"
              colorScheme="teal"
              onClick={() =>
                registerAction(
                  { username, email, dob, password },
                  props.history
                )
              }
            >
              Register
            </Button>
            <Button h="1.75rem" size="lg" colorScheme="teal">
              Reset
            </Button>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
};
export default withRouter(Register);
