import styled from '@emotion/styled';

export const StyledImage = styled.img`
  height: auto;
`;

export const StyledTaskImage = styled(StyledImage)`
  position: absolute;
  left: 0;
  objectfit: scale-down;
  top: 15%;
  right: 0;
  bottom: 0;
  display: block;
  margin: auto;
  height: 60%;
`;
