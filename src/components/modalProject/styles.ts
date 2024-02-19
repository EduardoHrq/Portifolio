import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Close = styled(Dialog.Close)`

  position: absolute;
  /* backdrop-filter: blur(10px) saturate(180px); */
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: none;
  outline: none;
  background-color: red;

`

export const Title = styled(Dialog.Title)`

  text-align: center;
  color: #FFF;

`

export const Content = styled(Dialog.Content)`

  min-width: 75%;
  border-radius: 12px;
  background: #18181b80;
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 110;


  .contents {
    width: 100%;

    img {
      width: 100%;
      background-color: blue;
    }

  }
`