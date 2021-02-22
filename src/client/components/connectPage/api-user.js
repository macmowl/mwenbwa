import axios from "axios";

export const createUser = user =>
    axios
        .post(`/api/auth/register`, user)
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
