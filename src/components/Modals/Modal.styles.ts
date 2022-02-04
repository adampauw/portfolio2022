import styled from "@emotion/styled";

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
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`;
export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  min-height: 90vh;
  border-radius: 8px;
`;
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;
export const HeaderText = styled.div`
  color: #fff;
  align-self: center;
  color: lightgray;
`;
export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;
export const Content = styled.div`
  height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
`;
