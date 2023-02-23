import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Select,
  Textarea,
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
import addCustomer from "../services/CustomerService";

const Customer = (props) => {
  const [custname, setCustName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [proofType, setProofType] = useState("");
  const [custLocation, setCustLocation] = useState("");
  const [emailid, setEmailid] = useState("");

  async function addCust(customerDetails, history) {
    try {
      const addCustStatus = await addCustomer(customerDetails);
      console.log(">>>>>>>>>>> : " + JSON.stringify(addCustStatus));
      history.push({
        pathname: "/Customer",
      });
    } catch (err) {}
  }

  return (
    <div id="content">
      <div>
        <Menu items={MenuItems} prop={props} />
      </div>
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
              <Text>Enter Customer Details:</Text>
              Name(s) :
              <Input
                value={custname}
                onChange={(event) => setCustName(event.target.value)}
                placeholder="User Name"
              />
              Gender :
              <Select
                placeholder="Select option"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <option value="option1">Male</option>
                <option value="option2">Female</option>
                <option value="option3">Other</option>
              </Select>
              Address :
              <Textarea
                placeholder="Please Enter Address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
              Email ID :
              <Input
                value={emailid}
                onChange={(event) => setEmailid(event.target.value)}
                placeholder="Email"
              />
              Proof Type :
              <Input
                value={proofType}
                onChange={(event) => setProofType(event.target.value)}
                placeholder="Proof Type"
              />
              Add Document :
              <Input type="file" />
              Customer Location:
              <Input
                value={custLocation}
                onChange={(event) => setCustLocation(event.target.value)}
                placeholder="Customer Location"
              />
              <Button
                h="1.75rem"
                size="lg"
                colorScheme="teal"
                onClick={() =>
                  addCustomer(
                    {
                      custname,
                      gender,
                      address,
                      emailid,
                      proofType,
                      custLocation,
                    },
                    props.history
                  )
                }
              >
                Add
              </Button>
              <Button h="1.75rem" size="lg" colorScheme="teal">
                Reset
              </Button>
            </CardBody>
          </Card>
        </Box>
      </ChakraProvider>
    </div>
  );
};
export default withRouter(Customer);
