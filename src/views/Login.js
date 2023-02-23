import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { ChakraProvider,Box, Card, CardHeader, CardBody, CardFooter,Text ,Input,Button} from '@chakra-ui/react';
import loginService from "../services/LoginService";

const Login = (props) => {

const[username, setUsername] = useState('Authis')
const[password, setPassword] = useState('')
const[status, setStatus] = useState('')

const handleUsername = (event) => setUsername(event.target.value)
const handlePassword = (event) => setPassword(event.target.value)

async function loginAction(logDetails, history) {
  console.log(">>>>>>>"+logDetails.username);
try{
      const loginStatus = await loginService(logDetails);
     // console.log("Login Status >>>>>>>"+JSON.stringify(loginStatus));
    if(loginStatus.data === "SUCCESS"){
      setStatus("SUCCESS");
      console.log("SUCCESS  Status >>>>>>>",status);

        history.push({
          pathname: "/Dashboard",
        });
     } 
     
   }catch(e){
    setStatus("FALILURE");
      console.log("FAILURE  Status >>>>>>>",status);
    console.log("Failure e >",e);
   }

  //  loginService(logDetails).then((date) => {
  //     console.log("Success >",date);
  //  }).catch((err) => {
  //   console.log("Failure >",err);
  //  })
 
}

function moveRegister(history){
 history.push({
      pathname: "/Register",
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
          <Text fontSize='50px' color='tomato'>
               {status}
          </Text>
            <Text>Enter Your Credentials:</Text>
            Login ID: <Input value={username} onChange={handleUsername} placeholder='User Name'/>
            Password: <Input value={password} onChange={handlePassword} placeholder='Password' />
            <br/>&nbsp;
            <br/>&nbsp;
           

            <Button h='1.75rem' size='lg' colorScheme='teal' onClick={() => loginAction({username,password},props.history)}>
              Login
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button h='1.75rem' size='lg' colorScheme='teal' onClick={() => moveRegister(props.history)}>
                          Register
                        </Button>
          </CardBody>
        </Card>
        </Box>
   </ChakraProvider>
  )
  };

  export default withRouter(Login);