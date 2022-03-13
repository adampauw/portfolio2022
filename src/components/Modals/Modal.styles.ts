import styled from '@emotion/styled';
import { WHITE } from '../../Constants/Colours.constants';
import { FONT_SIZE_LARGE } from '../../Constants/UI.constants';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: 70%;
  height: 90%;
  outline: 0;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 1024px) {
    width: 95%;
  }
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
export const StyledModal = styled.div`
  z-index: 200;
  background: ${WHITE};
  position: relative;
  margin: auto;
  min-height: 90vh;
  border-radius: 16px;
  @media (max-width: 768px) {
    height: 100vh;
    border-radius: 0px;
  }
`;
export const Header = styled.div`
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color: ${WHITE};
  align-self: center;
`;
export const CloseButton = styled.button`
  font-size: ${FONT_SIZE_LARGE};
  border: none;
  border-radius: 3px;
  background: none;
  :hover {
    cursor: pointer;
  }
  -webkit-animation: spin 5s ease-in-out infinite;
  -moz-animation: spin 5s ease-in-out infinite;
  -ms-animation: spin 5s ease-in-out infinite;
  -o-animation: spin 5s ease-in-out infinite;
  animation: spin 5s ease-in-out infinite;
  @keyframes spin {
    96% {
      transform: rotate(0deg);
    }
    98% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Content = styled.div`
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
