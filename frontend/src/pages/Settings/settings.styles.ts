import styled from "styled-components";
import BaseContainer from "ui/basecontainer.component";

const SettingsBox = styled(BaseContainer)`
  color: white;
  background-color: #121212;
  padding: 2em;
  border-radius: 5px;

  .profile {
    text-align: center;
  }
`;

const SettingsContainer = styled(BaseContainer)`
  padding: 0;
  height: calc(100vh - 45px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export { SettingsContainer, SettingsBox };
