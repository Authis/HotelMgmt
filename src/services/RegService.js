import axios from "axios";

const REG_USER_API = "http://localhost:8090/v1/api/register";

export default function registerUser(userdetails) {
  console.log(">    : : :::  : ", JSON.stringify(userdetails));

  return axios({
    method: "post",
    url: REG_USER_API,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: {
      username: userdetails.username,
      email: userdetails.email,
      dob: userdetails.dob,
      password: userdetails.password,
    },
  });
}
