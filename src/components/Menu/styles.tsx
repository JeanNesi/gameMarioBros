import styled from "styled-components";

export const Container = styled.div`
  background: #6666e6;
  width: 1120px;
  min-height: 70vh;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border-bottom: 10px solid green;
`;

export const Cloud = styled.img`
  width: 600px;
  position: absolute;
  top: 25%;
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

export const MenuOptionsContainer = styled.div`
  background: #00000097;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
