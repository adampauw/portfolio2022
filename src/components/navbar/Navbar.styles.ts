import styled from '@emotion/styled';

export const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  justify-content: flex-start;
  background-color: #ffffff;
  color: #2c3e50;
  border: none;
  border-radius: 30px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  position: fixed;
  right: -55px;
  transition: 0.7s ease;
  z-index: 100;
  @media (min-width: 767px) {
    &:hover {
      background-color: #ffffff;
      position: fixed;
      right: -50px;
      width: 200px;
    }
  }
  @media (max-width: 767px) {
    position: absolute;
    &:active {
    }
  }
  svg {
    font-size: 20px;
    margin-right: 15%;
  }
`;
