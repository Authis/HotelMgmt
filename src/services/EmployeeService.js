import axios from "axios";

const GET_USERS_LIST="http://localhost:8090/v1/api/getUsers";

export default function getUserList() {
    //console.log(">>>>>>>>>>>>>>>>>",logDetails.username);
    return axios({
        method: 'get',
        url: GET_USERS_LIST,
        headers: {
         'Access-Control-Allow-Origin':'*',
         'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {}
      });
  };