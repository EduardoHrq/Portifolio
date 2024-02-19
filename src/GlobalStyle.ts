import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body, html {
    width: 100%;
    height: 100%;
    padding: .2rem;
    background-color: #52525b;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`

export const Overlay = styled(Dialog.Overlay)`

  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 100;
  background: #3f3f4650;
  /* backdrop-filter: blur(10px) saturate(100%); */
  /* filter: blur(50px); */
  /* filter: blur(150px); */

`