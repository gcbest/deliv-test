import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const auth = require('../utils/auth');

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

export default PrivateRoute;