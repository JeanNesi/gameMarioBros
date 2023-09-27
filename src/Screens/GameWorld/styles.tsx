import styled from "styled-components";

export const Container = styled.div`
  background: #6666e6;
  border-bottom: 20px solid green;
  width: 1120px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

export const Cloud = styled.img`
  width: 600px;
  position: absolute;
  top: 10px;
  animation: pipeAnimation 20s infinite linear;

  @keyframes pipeAnimation {
    0% {
      right: -600px;
    }

    100% {
      right: 100%;
    }
  }
`;
