import styled from '@emotion/styled';
import { DARK_WHITE, PURPLE, WHITE } from '../../Constants/Colours.constants';
import { FONT_SIZE_NORMAL } from '../../Constants/UI.constants';

export const FooterWrapper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 55px;
  padding: 40px 60px;
  border-radius: 8px 8px 8px 100px;
  background-color: ${PURPLE};
  @media (max-width: 767px) {
    margin: 5px;
    padding: 30px 40px;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Link = styled.a`
  margin-top: 16px;
  color: ${WHITE};
  font-size: ${FONT_SIZE_NORMAL};
  line-height: 22px;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    color: ${DARK_WHITE};
  }
`;

export const Text = styled.span`
  padding-left: 10px;
`;

export const Image = styled.img`
  width: 25%;
  object-fit: scale-down;
  -webkit-animation: pop 5s ease-in-out infinite;
  -moz-animation: pop 5s ease-in-out infinite;
  -ms-animation: pop 5s ease-in-out infinite;
  -o-animation: pop 5s ease-in-out infinite;
  animation: pop 5s ease-in-out infinite;
  @keyframes pop {
    3% {
      transform: scale(105%);
    }
    6% {
      transform: scale(105%);
    }
    9% {
      transform: scale(100%);
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
