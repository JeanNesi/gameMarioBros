import styled from "styled-components";

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 160px;
    position: absolute;
    bottom: 0px;
    z-index: 1;
  }

  .jump {
    animation: marioJump 500ms;

    @keyframes marioJump {
      0% {
        bottom: 0;
      }

      40% {
        bottom: 150px;
      }

      50% {
        bottom: 150px;
      }

      60% {
        bottom: 150px;
      }

      100% {
        bottom: 0px;
      }
    }
  }
`;
