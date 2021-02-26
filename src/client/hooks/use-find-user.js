import {useState, useEffect} from "react";
import API from "../utils/api";

export default function useFindUser() {
    const [user, setUser] = useState(null);
    // const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function findUser() {
            await API.get("/user")
                .then(res => {
                    setUser(res.data.currentUser);
                    // setLoading(false);
                })
                // .catch(err => setLoading(false));
                .catch(err => console.log(err));
        }
        findUser();
    }, []);

    return {
        user,
        // isLoading
    };
}
