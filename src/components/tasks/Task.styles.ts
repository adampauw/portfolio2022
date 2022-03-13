import styled from '@emotion/styled';
import { LIGHT_GREY, PURPLE } from '../../Constants/Colours.constants';
import { GRADIENT } from '../../Constants/CSS.constants';
import { FONT_SIZE_NORMAL } from '../../Constants/UI.constants';

// Task Container styles
export const TaskContainer = styled.div`
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 150px 0;
  @media (max-width: 767px) {
    margin: 50px 0;
  }
`;

export const TaskWrapper = styled.div`
  background: ${GRADIENT};
  padding-bottom: 55px;
  margin-top: -100px;
  padding-top: 100px;
`;

export const Divider = styled.div`
  width: 80%;
  border: 2px solid ${PURPLE};
  margin: 100px auto;
  border-radius: 40%;
  @media (max-width: 767px) {
    margin: 50px auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

// Task styles
export const Task = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 40px;
  width: 50%;
  &:focus-visible {
    outline: none;
  }
  @media (min-width: 990px) {
    width: 33.3%;
    padding: 20px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 0 1rem;
  line-height: 1.5em;
  @media (max-width: 990px) {
    padding: 0;
  }
`;

export const TaskTitle = styled.h2`
  font-size: 2vw;
  font-family: 'Zen Kurenaido';
  line-height: 1.1em;
  color: ${PURPLE};
  margin-bottom: 0.2em;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3.5vw;
  }
`;

export const Link = styled.a`
  color: ${PURPLE};
  font-weight: initial;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: unset;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  font-size: 32px;
  line-height: 1.1em;
  color: ${PURPLE};
  margin: 0 0 50px;
  text-align: center;
`;

export const ModalTaskDescriptionBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 0;
  :nth-child(2n) {
    flex-direction: row-reverse;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    :nth-child(2n) {
      flex-direction: column;
    }
  }
`;

export const ModalTaskDescription = styled.div`
  font-size: ${FONT_SIZE_NORMAL};
  color: ${PURPLE};
  display: flex;
  align-items: center;
  margin-bottom: 0.2em;
  padding: 15px;
  width: 50%;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
    padding: 0;
  }
`;

export const ModalTaskObjective = styled(ModalTaskDescription)`
  width: 100%;
`;

export const ModalTaskImage = styled.div`
  max-width: 50%;
  margin: auto;
  img {
    border-radius: 16px;
    border: 1px solid ${LIGHT_GREY};
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px;
  flex-direction: column;
  @media (max-width: 426px) {
    padding: 10px;
  }
`;

export const ModalText = styled.div`
  width: 40%;
  @media (max-width: 426px) {
    width: 100%;
  }
`;

export const ModalHeading = styled.h3`
  @media (max-width: 426px) {
    display: flex;
    justify-content: center;
  }
`;
