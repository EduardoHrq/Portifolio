import styled from "styled-components";

interface WindowSize {
  resize: number
}

export const CertificatesContainer = styled.div<WindowSize>`

  width: 100%;
  height: ${p => p.resize - 70.2 + "px"};
  display: grid;
  grid-template-columns: repeat(auto-fit, 21rem);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  align-content: start;

  overflow-x: hidden;
  overflow-y: auto;

  @media only screen and (max-device-width: 768px) {

    grid-template-columns: repeat(auto-fit, 100%);

  }

`