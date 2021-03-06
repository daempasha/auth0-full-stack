import React from "react";
import logo from "./logo.svg";

import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton/loginbutton.component";
import LogoutButton from "./components/LogoutButton/logoutbutton.component";
import Navbar from "./components/Navbar/navbar.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import SecureRoute from "./components/SecureRoute/secureroute.component";
import Landing from "./pages/Landing/landing.page";
import Dashboard from "pages/Dashboard/dashboard.page";
import Settings from "pages/Settings/settings.page";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Switch>
            <Route path="/" exact component={Landing} />
            <SecureRoute path="/dashboard" exact>
              <Dashboard />
            </SecureRoute>
            <SecureRoute path="/settings" exact>
              <Settings />
            </SecureRoute>
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;
