import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'; 

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route 
  {...rest}
  render = {props =>
        localStorage.getItem('key') ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" /> 
        )
    }
  />
);


export default (PrivateRoute);