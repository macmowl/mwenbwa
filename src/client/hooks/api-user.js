import API from "../utils/api";
import {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "./user-context";

export default function useAuth() {
    const history = useHistory();
    const {setUser} = useContext(UserContext);
    const [error, setError] = useState(null);

    //set user in context and push to map
    const setUserContext = async () => {
        await API.get("/user")
            .then(res => {
                setUser(res.data.currentUser);
                history.push("/map");
            })
            .catch(err => console.log(err));
    };

    //create user and set in context
    const createUser = async user => {
        const create = await API.post(`/api/auth/register`, user)
            .then(async () => {
                await setUserContext();
            })
            .catch(err => console.log(err));
        return create;
    };

    //login user and set in context
    const loginUser = async user => {
        const log = await API.post(`/api/auth/login`, user)
            .then(async () => {
                const context = await setUserContext();
                return context;
            })
            .catch(err => setError(err.response.user));
        return log;
    };

    const getUser = async id => {
        const user = await API.post(`/api/auth/${id}`)
            .then(res => res)
            .catch(err => console.log(err));
        return user;
    };

    const logoutUser = () =>
        API.get("api/auth/logout")
            .then(() => {
                setUser(null);
                history.push("/");
            })
            .catch(err => console.error(err));

    return {
        createUser,
        loginUser,
        getUser,
        logoutUser,
        error,
    };
}

export const getRanks = () =>
    API.get(`api/auth/ranks`)
        .then(res => ({succeed: true, data: res.data}))
        .catch(err => ({succeed: false, error: err}));
