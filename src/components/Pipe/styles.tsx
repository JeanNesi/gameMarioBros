import styled from "styled-components";

export const Container = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  img {
    width: 80px;
    z-index: 2;
    bottom: 0;
    position: absolute;
    right: -80px;
    animation: pipeAnimation 2s infinite linear;

    @keyframes pipeAnimation {
      0% {
        right: -80px;
      }

      100% {
        right: 100%;
      }
    }
  }
`;
