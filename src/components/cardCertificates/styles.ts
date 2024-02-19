import styled from "styled-components";

export const CardCertificateContainer = styled.div`

  position: relative;
  width: 20rem;
  height: 12rem;
  padding: 8px;
  background-color: #3f3f46;
  border-radius: 12px;

  align-self: center;
  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  filter: brightness(50%);

  transition: all .3s ease;

  img {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: green ;
  }

  svg {
    position: absolute;
    top: .5rem;
    right: .5rem;
    backdrop-filter: blur(10px);
    background-color: #FFFFFF50;
    border-radius: 100%;

    cursor: pointer;

    opacity: 0;
    scale: 0.2;
    transition: all .3s;
  }

  .certificate-name {
    position: absolute;
    width: max-content;
    background-color: #00000075;
    color: #FFF;
    transform: translate(-50%, -50%);
    left: 50%;
    bottom: -.5rem;

    font-weight: bold;
    padding: .5rem 1rem;
    border-radius: 8px;
    backdrop-filter: blur(10px) saturate(150%);

    user-select: none;
    opacity: 0;
    scale: 0.2;
    transform-origin: left bottom;
    transition: all .3s;
  }

  &:hover {
    filter: brightness(100%);
    box-shadow: 0 0 20px -10px #FFF;

    .certificate-name{ 
      opacity: 1;
      scale: 1;
    }

    svg {
      opacity: 1;
      scale: 1;

    }
    
  }

   @media only screen and (max-device-width: 768px) {
    width: 15rem;

    .certificate-name {
      font-size: .8rem;
    }
  }
`