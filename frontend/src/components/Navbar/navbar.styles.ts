import styled from "styled-components";
import BaseContainer from "ui/basecontainer.component";
import Navbar from "./navbar.component";

const NavbarContainer = styled(BaseContainer)`
  color: white;
  background-color: #121212;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 5em;

  .user {
    border-radius: 50%;
  }
`;

export default NavbarContainer;
