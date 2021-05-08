import React from "react";
import styled from "@emotion/styled";

interface OverlayProps {
  width: number;
  height: number;
  position: number;
}

export const Overlay = (props: OverlayProps) => {

  const Overlay = styled.div`
    width: ${props.width}px;
    height: ${props.height}px;
    transform: skew(-32deg);
    left: ${props.position}px;
    background: white;
    position: absolute;
    @media (max-width: 425px) {
      display: none;
    }
  `;

  return ( 
    <Overlay />
  );
}

export default Overlay
