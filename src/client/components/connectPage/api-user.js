import {URL_SERVER} from "../../core/constants";
import axios from "axios";

const createUser = user => {
    axios
        .post(`${URL_SERVER}/api/users/register`, user)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
};

export default {createUser};
