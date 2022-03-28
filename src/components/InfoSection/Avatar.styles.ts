import styled from '@emotion/styled';

export const Avatar = styled.div`
display: grid;
grid-template-columns: 1fr;
align-items: center;
width: 30%;
}
@media(max-width: 767px) {
  width: 100%;
  z-index: 100;
}
@media(min-width: 2560px) {
  width: 20%;
}
`;

export const AvatarImage = styled.div`
  padding: 15px;
  grid-row-start: 1;
  grid-column-start: 1;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  &:nth-child(2) {
    -webkit-animation: spin 90s ease-in-out infinite;
    -moz-animation: spin 90s ease-in-out infinite;
    -ms-animation: spin 90s ease-in-out infinite;
    -o-animation: spin 90s ease-in-out infinite;
    animation: spin 90s ease-in-out infinite;
    @keyframes spin {
      50% {
        transform: rotate(360deg);
      }
    }
  }
  &:last-child {
    -webkit-animation: spin 60s ease-in-out infinite;
    -moz-animation: spin 60s ease-in-out infinite;
    -ms-animation: spin 60s ease-in-out infinite;
    -o-animation: spin 60s ease-in-out infinite;
    animation: spin 60s ease-in-out infinite;
    @keyframes spin {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
