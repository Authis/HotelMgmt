import axios from "axios";

const LOGIN_URL="http://localhost:8090/v1/api/login";

export default function loginService(logDetails) {
    //console.log(">>>>>>>>>>>>>>>>>",logDetails.username);
    return axios({
        method: 'get',
        url: LOGIN_URL+"/"+logDetails.username,
        headers: {
         'Access-Control-Allow-Origin':'*',
         'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          username: logDetails.username,
          password:logDetails.password,
        }
      });
  };