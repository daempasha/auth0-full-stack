import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/loginbutton.component";
import LogoutButton from "../LogoutButton/logoutbutton.component";
import NavbarContainer from "./navbar.styles";

const Navbar = () => {
  const { isAuthenticated, user } = useAuth0();

  return (
    <NavbarContainer>
      <div>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/dashboard"
        >
          DASHBOARD
        </Link>
      </div>

      <div>
        {isAuthenticated ? (
          <Link to="/settings">
            <img className="user" src={user?.picture} width={25} />
          </Link>
        ) : (
          <LoginButton />
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
