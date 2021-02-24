import React, {useContext} from "react";
import {Route, Redirect} from "react-router-dom";
import {UserContext} from "../hooks/user-context";
// import Loading from './Loading';

export default function PrivateRoute(props) {
    const {user, isLoading} = useContext(UserContext);
    const {component: Component, ...rest} = props;

    if (isLoading) {
        return null;
    }

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
