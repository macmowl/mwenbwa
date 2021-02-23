import axios from "axios";

export const createUser = user =>
    axios
        .post(`/api/auth/register`, user)
        .then(() => true)
        .catch(err => {
            console.log(err);
            return false;
        });

export const loginUser = user =>
    axios
        .post(`/api/auth/login`, user)
        .then(res => {
            console.log(res.data);
            return true;
        })
        .catch(err => {
            console.error(err);
            return false;
        });

export const getRanks = () =>
    axios
        .get(`${URL_SERVER}/api/users/ranks`)
        .then(res => ({succeed: true, data: res.data}))
        .catch(err => ({succeed: false, error: err}));
