import styled from "styled-components";

export const BoxDescription = styled.div`

  position: absolute;
  width: 100%;
  transform: translate(0, 0%);
  top: 30%;
  scale: .5;
  visibility: hidden;
  opacity: 0;
  z-index: -10;
  background-color: #00000085;
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  color: #FFF;
  user-select: none;
  padding: 1rem;

  border-radius: 0 0 1rem 1rem;
  transition: all .3s ease;

  .principal {
    position: absolute;
    top: 1rem;
    right: 1rem;

    line-height: 0;
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }

  .desc {
    margin: 1rem 0;
  }



`

export const CardProjContainer = styled.div`

width: 21rem;
height: 11rem;
border-radius: 1rem ;
transition: all .3s ease;

justify-self: center;
align-self: center;

display: flex;

img {
  flex: 1;
  width: 100%;
  border-radius: 12px;
}

  &:hover {
    position: relative;
    transform-origin: top;
    scale: 1.1;

    ${BoxDescription} {
      visibility: visible;
      top: 95%;
      scale: 1;
      opacity: 1;
      z-index: 10;
    }

    .view {
      opacity: 1;
    }
  }

 

  .view {
    position: absolute;
    right: 0;
    opacity: 0;
    line-height: 0;
    padding: .5rem;
    border-radius: 100%;
    background-color: #FFFFFF90;
    transition: all .3s ease;
    cursor: pointer;
  }

  @media only screen and (max-device-width: 768px) {
    & {
      width: 15rem;
    }

    ${BoxDescription} {
      font-size: 0.8rem;
    }

  }

`
