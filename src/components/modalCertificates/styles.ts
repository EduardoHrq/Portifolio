import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Group = styled.div`

  display: flex;
  flex-direction: column;

  gap: .5rem;

`

export const SectionGroup = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

`

export const Infos = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-bottom: 2rem;

`

interface Position {
  x: number
  y: number
}

interface ViewPosition {
  viewPosition: Position
}

export const ContentCertificate = styled(Dialog.Content)<ViewPosition>`

  @keyframes modalCertificate {
    to {
      scale: 1;
      top: 50%;
      left: 50%;
    }
  }
  
  min-width: 85%;
  border-radius: 12px;
  background: #18181b80;
  backdrop-filter: blur(10px) saturate(100%);
  -webkit-backdrop-filter: blur(10px) saturate(100%);
  padding: 1rem;
  position: fixed;
  top: ${p => p.viewPosition.y + "px"};
  left: ${p => p.viewPosition.x + "px"};
  transform: translate(-50%, -50%);
  z-index: 110;
  scale: .2;
  color: #FFF;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  transform-origin: top left;
  animation: modalCertificate .5s ease forwards ;
  img {
    background-color: red;
    align-self: center;
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: .7rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: bold;
  }

`