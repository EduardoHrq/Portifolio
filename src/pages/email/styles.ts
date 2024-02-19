import styled from "styled-components";

export const Groups = styled.div`

  display: flex;
  align-items: center;
  padding: .5rem 1rem;
  border-radius: 12px;
  background-color: #3f3f46;
  color: #FFF;
  
  label {
    font-weight: bold;
    font-size: 1.2rem;
  }
  
  .bttClose {
    background-color: transparent;
    color: #FFF;
    transition: all .3s ease;
    &:hover {
      color: red;
    }
  }

`

interface copied {
  copied?: string
}

export const BttCopy = styled.button<copied>`

    position: relative;
    padding: 1rem;
    border-radius: 8px;
    background-color: #d4d4d8;
    transition: all .5s ease;

    svg {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: ${p => p.copied === "Copied!" ? "-25%" : "0"};
      scale: ${p => p.copied === "Copied!" ? "1" : ".5"};
      transform-origin: top right;
      opacity: ${p => p.copied === "Copied!" ? "1" : "0"};

      transition: all .3s ease;
    }



`

export const TextEmail = styled.div`

  display: flex;
  flex: 1;
  align-items: center;
  
  padding: 1rem;
  border-radius: 12px;
  background-color: #3f3f46;
  color: #FFF;

  textarea {
    flex: 1;
    height: 100%;

    background-color: transparent;
    border-radius: 12px;
    padding: 1rem;
    border: solid #00000025;
    outline: none;
    resize: none;

    color: #fff;
  }
`

export const ButtonsToForm = styled.div`

  @keyframes fly {
    0%, 100% {
      top: 50%;
      /* transform: translate(-50%, -50%) rotate(0deg); */
    }

    25% {
      top: 25%;
      /* transform: translate(-50%, -50%) rotate(-45deg); */
    }

    50% {
      top: 50%;
      /* transform: translate(-50%, -50%) rotate(-0deg); */
    }

    75%{
      top: 75%;
      /* transform: translate(-50%, -50%) rotate(45deg); */
    }
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  button {
    position: relative;
    padding: 1.5rem 0;
    flex: 1;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 12px;
    transition: all .3s ease;

    svg {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 5%;
      transition: all .5s ease;
      transform-origin: center;
    }
  }

  .clear {
    background-color: #ef4444;

    &:hover {
      background-color: #fca5a5;
    }
  }

  .send {
    background-color: #d4d4d8;

    &:hover {
      background-color: #f4f4f5;

      svg {
        left: 95%;
        animation: fly 1s linear infinite;
      }
    }
  }


`


export const FormContainer = styled.form`

display: flex;
flex-direction: column;
height: 100%;

gap: 1rem;

button {
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
}

  input {
    background-color: transparent;
    color: #fff;
    line-height: 0;
    border: none;
    outline: none;
    padding: .5rem 1rem;
    font-size: 1rem;
    font-weight: normal;
    flex: 1;
  }

`