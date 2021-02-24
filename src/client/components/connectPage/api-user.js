import API from "../../utils/api";

export const createUser = user =>
    API.post(`/api/auth/register`, user)
        .then(data => {
            console.log(data);
            return true;
        })
        .catch(err => {
            console.log(err);
            return false;
        });

export const loginUser = user =>
    API.post(`/api/auth/login`, user)
        .then(res => {
            console.log(res);
            return true;
        })
        .catch(err => {
            console.error(err);
            return false;
        });

export const logoutUser = () =>
    API.get("api/auth/logout")
        .then(res => console.log(res))
        .catch(err => console.error(err));

export const getRanks = () =>
    API.get(`api/auth/ranks`)
        .then(res => ({succeed: true, data: res.data}))
        .catch(err => ({succeed: false, error: err}));
