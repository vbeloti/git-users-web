import styled, { keyframes } from 'styled-components';


export const BoxLoading = styled.div`
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
  overflow: hidden;
`;

const animationA = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  overflow: hidden;

  &:after {
  content: " ";
  background-color: black;
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: ${animationA} 1.2s infinite;
}
`;


