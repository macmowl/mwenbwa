import axios from "axios";

export const createUser = user => {
    axios
        .post(`/api/auth/register`, user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
};
