import {Route, Redirect} from 'react-router-dom';
  
const UserRoute = ({ children, isAuthenticated, ...rest }) => {
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
                  pathname: '/',
                  state: { from: location }
                }}
              />
            )
          )
      }
    />
  );
}

export default UserRoute;