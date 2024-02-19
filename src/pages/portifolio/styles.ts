import styled from "styled-components";

interface resize {
  resize: number
}

export const PortifolioContainer = styled.div<resize>`

  height: ${p => p.resize - 70.2 + "px"};
  display: grid;
  grid-template-columns: repeat(auto-fit, 21rem);
  gap: 1rem;
  align-items: center;
  justify-content: center;
  align-content: start;
  padding: 0 0 5rem 0;
  overflow-x: hidden;
  overflow-y: auto;


`