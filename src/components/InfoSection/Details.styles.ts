import styled from '@emotion/styled';
import { WHITE } from '../../Constants/Colours.constants';
import { FONT_SIZE_LARGE, FONT_SIZE_LARGER } from '../../Constants/UI.constants';

export const Details = styled.div`
  webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  float: left;
  width: 50%;
  min-height: 1px;
  padding: 50px 0;
  z-index: 2;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
`;

export const Text = styled.div`
  color: ${WHITE};
  font-size: ${FONT_SIZE_LARGE};
  line-height: 24px;
  display: flex;
  text-align: left;
  margin: 3% 0;
  @media (max-width: 426px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  color: ${WHITE};
  font-size: ${FONT_SIZE_LARGER};
  line-height: 35px;
  @media (min-width: 769px) {
    text-align: left;
  }
`;
