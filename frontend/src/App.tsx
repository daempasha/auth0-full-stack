import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton/loginbutton.component";
import LogoutButton from "./components/LogoutButton/logoutbutton.component";
import Navbar from "./components/Navbar/navbar.component";

function App() {
  return (
    <Auth0Provider
      domain="dev-5utythgz.us.auth0.com"
      clientId="ugNrzy2RtaQuNhcFnd9XostcI3QLP9D0"
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Navbar />
      </div>
    </Auth0Provider>
  );
}

export default App;
