import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export default function AuthenticatedRoute({ isAuth, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={() =>
                isAuth === 'true' ? <Component /> : <Redirect to={{ pathname: '/login' }} />
            }
        />
    );
}

AuthenticatedRoute.propTypes = {
    isAuth: PropTypes.string,
    component: PropTypes.any
};
