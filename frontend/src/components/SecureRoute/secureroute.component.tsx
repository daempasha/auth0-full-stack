import {
  Auth0Provider,
  useAuth0,
  withAuthenticationRequired,
} from "@auth0/auth0-react";
import { Route } from "react-router";

interface iSecureRoute {
  children?: any;
  path?: string;
  exact?: boolean;
  component?: any;
}

const SecureRoute = ({ children, path, exact = false, component }: any) => {
  return (
    <Route path={path} exact={exact} component={component}>
      {children}
    </Route>
  );
};

export default withAuthenticationRequired(SecureRoute);
