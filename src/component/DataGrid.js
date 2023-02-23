import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

const DataGrid = ({ List, Prop }) => {
  const empReturn = List.map((emp, key) => {
    return (
      <Tr>
        <Td>
          <Checkbox colorScheme="green" defaultChecked>
            Checkbox
          </Checkbox>
        </Td>
        <Td>{emp.username}</Td>
        <Td>{emp.email}</Td>
        <Td>{emp.dob}</Td>
      </Tr>
    );
  });

  console.log("empList>>>>>>>>>>>>>>>>", empReturn);
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>List of Employees</TableCaption>
        <Thead>
          <Tr>
            <Th>Select</Th>
            <Th>Name</Th>
            <Th>Email ID</Th>
            <Th>DOB</Th>
          </Tr>
        </Thead>
        <Tbody>{empReturn}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataGrid;
