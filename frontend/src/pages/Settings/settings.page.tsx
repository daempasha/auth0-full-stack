import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "components/LogoutButton/logoutbutton.component";
import Navbar from "components/Navbar/navbar.component";
import { useEffect } from "react";
import { SettingsContainer, SettingsBox } from "./settings.styles";

const Settings = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently().then((token) => console.log(token));
  }, []);

  return (
    <div>
      <Navbar />
      <SettingsContainer>
        <SettingsBox>
          <div className="profile">
            <img className="image" src={user?.picture} width={50} />
            <div>{user?.name}</div>
          </div>
          <p>Email: {user?.email}</p>
          <p>Access token: </p>
          <LogoutButton />
        </SettingsBox>
      </SettingsContainer>
    </div>
  );
};

export default Settings;
