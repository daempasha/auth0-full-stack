import { DEVICE_WIDTH } from "helpers/constants";
import styled from "styled-components";
import BaseContainer from "ui/basecontainer.component";

const LandingContainer = styled(BaseContainer)`
  padding: 0;
  height: 100vh;
  color: white;
  background-color: #2b2b2b;

  .particles {
    width: 100%;
    position: fixed;
  }

  .content {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 500;

    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;

    .description {
      text-align: justify;
      h1 {
        font-size: 48px;
      }

      a {
        color: white;
      }
      width: 600px;
    }
  }

  @media ${DEVICE_WIDTH.laptop} {
    .content {
      flex-direction: row;
    }
  }
`;

export default LandingContainer;
