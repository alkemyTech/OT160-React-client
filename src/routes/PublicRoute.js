import {Route, Redirect} from 'react-router-dom';
  
const PublicRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => children}
      />
    );
}

export default PublicRoute;