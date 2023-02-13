import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ChakraProvider,Box, Card, CardHeader, CardBody, CardFooter,Text ,Input,Button} from '@chakra-ui/react';


const Login = (props) => {

const[username, setUsername] = useState('murugan')
const[password, setPassword] = useState('test123')

const handleUsername = (event) => setUsername(event.target.username)
const handlePassword = (event) => setPassword(event.target.password)
function loginAction(logDetails, history) {
    console.log(">>>>>>>"+logDetails.username);
    history.push({
      pathname: "/Dashboard",
    });
}
  return (
   <ChakraProvider>
    <Box position="relative"
     h="50vh"
     p={6} display='flex'
     alignItems='center'
      justifyContent='center'>
        <Card>
          <CardBody>
            <Text>Enter Your C</Text>
            Login ID: <Input value={username} onChange={handleUsername} placeholder='User Name'/>
            Password: <Input value={password} onChange={handlePassword} placeholder='Password' />
            <Button h='1.75rem' size='lg' colorScheme='teal' onClick={() => loginAction({username,password},props.history)}>
              Login
            </Button>
          </CardBody>
        </Card>
        </Box>
   </ChakraProvider>
  )
  };

  export default withRouter(Login);