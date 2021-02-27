import {useState, useEffect} from "react";

export default function useRefresh() {
    const [treeUp, setTreeUp] = useState(null);
    const [userUp, setUserUp] = useState({});

    useEffect(() => {
        if (treeUp != null) {
            console.log(treeUp);
        }
    }, [treeUp]);

    return {
        treeUp,
        setTreeUp,
        userUp,
        setUserUp,
    };
}
