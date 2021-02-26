import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {UserContext} from "../hooks/user-context";

export default function PrivateRoute(props) {
    const {user} = useContext(UserContext);
    const {component: Component, ...rest} = props;

    if (user) {
        return (
            <Route
                {...rest}
                render={routeProps => <Component {...routeProps} />}
            />
        );
    }

    return <Redirect to={"/sign"} />;
}
