import {URL_SERVER} from "../../core/constants";
import axios from "axios";

export const createUser = user =>
    axios
        .post(`${URL_SERVER}/api/users/register`, user)
        .then(res => {
            console.log(res.data);
            return true;
        })
        .catch(err => {
            console.error(err);
            return false;
        });

export const loginUser = user =>
    axios
        .post(`${URL_SERVER}/api/users/login`, user)
        .then(res => {
            console.log(res.data);
            return true;
        })
        .catch(err => {
            console.error(err);
            return false;
        });
