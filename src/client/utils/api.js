import axios from "axios";

export default axios.create({
    baseURL: "https://leaf-game.herokuapp.com",
    withCredentials: true,
    credentials: "include",
});
