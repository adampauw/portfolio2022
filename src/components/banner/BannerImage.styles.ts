import styled from "@emotion/styled";

export const BannerImageWrapper = styled.div`
width: 100%;
margin: 0px auto;
max-width: 1700px;
z-index: 99;
position: relative;
text-align: center;
}
`;

export const BrowserImage = styled.img`
  width: 100%;
  height: auto;
  padding: 5% 20%;
`;

export const Cloud1 = styled.div`
position: absolute;
width: 22%;
top: -6%;
right: 10%;
z-index: 101;
-webkit-animation: slide 20s ease-in-out infinite;
-moz-animation: slide 20s ease-in-out infinite;
-ms-animation: slide 20s ease-in-out infinite;
-o-animation: slide 2s ease-in-out infinite;
animation: slide 20s ease-in-out infinite;
@keyframes slide {
   50% { transform: translate(10%); }
}
`;

export const Cloud2 = styled.div`
position: absolute;
width: 18%;
top: -7%;
left: 10%;
z-index: -1;
-webkit-animation: slide 15s ease-in-out infinite;
-moz-animation: slide 15s ease-in-out infinite;
-ms-animation: slide 15s ease-in-out infinite;
-o-animation: slide 15s ease-in-out infinite;
animation: slide 15s ease-in-out infinite;
@keyframes slide {
   50% { transform: translate(-30%); }
}
`;

export const Element2 = styled.div`
position: absolute;
width: 16%;
top: 48%;
left: 37%;
z-index: 101;
`;

export const Element3 = styled.div`
position: absolute;
width: 12%;
top: 28%;
left: 24%;
z-index: 101;
-webkit-animation: pop 5s ease-in-out infinite;
-moz-animation: pop 5s ease-in-out infinite;
-ms-animation: pop 5s ease-in-out infinite;
-o-animation: pop 5s ease-in-out infinite;
animation: pop 5s ease-in-out infinite;
@keyframes pop {
    3% { transform: scale(105%); }
    6% { transform: scale(105%); }
    9% { transform: scale(100%); }
}
`;

export const Element4 = styled.div`
position: absolute;
width: 22%;
top: 28%;
right: 24%;
z-index: 101;
`;

export const Element5 = styled.div`
position: absolute;
width: 22%;
top: 45%;
right: 24%;
z-index: 101;
`;

export const Element9 = styled.div`
position: absolute;
width: 16%;
top: 28%;
left: 37%;
z-index: 101;
`;

export const Element13 = styled.div`
position: absolute;
width: 12%;
top: 67%;
left: 24%;
z-index: 101;
`;


export const Plant3 = styled.div`
position: absolute;
width: 15%;
top: 48%;
right: 10%;
z-index: 101;
-webkit-animation: rotate 5s ease-in-out infinite;
-moz-animation: rotate 5s ease-in-out infinite;
-ms-animation: rotate 5s ease-in-out infinite;
-o-animation: rotate 5s ease-in-out infinite;
animation: rotate 5s ease-in-out infinite;
transform-origin: bottom;
@keyframes rotate {
    50% { transform: rotate(5deg); }
}
`;

export const Plant4 = styled.div`
position: absolute;
width: 15%;
top: 40%;
left: 6%;
z-index: 101;
-webkit-animation: rotate 5s ease-in-out infinite;
-moz-animation: rotate 5s ease-in-out infinite;
-ms-animation: rotate 5s ease-in-out infinite;
-o-animation: rotate 5s ease-in-out infinite;
animation: rotate 10s ease-in-out infinite;
transform-origin: bottom;
@keyframes rotate {
    50% { transform: rotate(5deg); }
}
`;

export const Image = styled.img`
width: 100%;
height: auto;
`;
