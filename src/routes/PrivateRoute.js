import {Route, Redirect} from 'react-router-dom';
  
const PrivateRoute = ({ children, isAuthenticated, redirect, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated
            ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: redirect,
                  state: { from: location }
                }}
              />
            )
          )
      }
    />
  );
}

export default PrivateRoute;