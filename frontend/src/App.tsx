import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton/loginbutton.component";
import LogoutButton from "./components/LogoutButton/logoutbutton.component";
import Navbar from "./components/Navbar/navbar.component";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import SecureRoute from "./components/SecureRoute/secureroute.component";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Switch>
            <SecureRoute path="/dashboard" exact>
              <Navbar />
              <p>Dashboard</p>
            </SecureRoute>
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
}

export default App;
