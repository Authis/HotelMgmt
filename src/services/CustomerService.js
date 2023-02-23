import axios from "axios";

const ADD_CUSTOMER_API = "http://localhost:8090/v1/api/addcustomer";

export default function addCustomer(customerDetails) {
  console.log(">>>>>>>>>>>>>>" + customerDetails);
  return axios({
    method: "post",
    url: ADD_CUSTOMER_API,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      custName: customerDetails.custname,
      gender: customerDetails.gender,
      address: customerDetails.address,
      emailId: customerDetails.emailid,
      proofType: customerDetails.proofType,
      custLocation: customerDetails.custLocation,
    },
  });
}
