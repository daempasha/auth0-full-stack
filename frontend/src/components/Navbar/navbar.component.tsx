import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/loginbutton.component";
import LogoutButton from "../LogoutButton/logoutbutton.component";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      {isAuthenticated && user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}

      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Navbar;
