import React, { useState, useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import "../style/common.css";
import MenuItems from "../component/MenuItems";
import Menu from "../component/Menu";
import getUserList from "../services/EmployeeService";
import DataGrid from "../component/DataGrid";

const Employees = (props) => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const empListStatus = await getUserList();
        setEmpList(empListStatus.data);
        console.log("empListStatus  : >> ", empListStatus.data);
      } catch (err) {
        console.log("Err while fetcing Employee List ", err);
      }
    })();
  }, []);

  if (empList.length == 0) {
    return <Spinner />;
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
            <CardBody>{<DataGrid List={empList} Prop={props} />}</CardBody>
          </Card>
        </Box>
      </ChakraProvider>
    </div>
  );
};
export default withRouter(Employees);
