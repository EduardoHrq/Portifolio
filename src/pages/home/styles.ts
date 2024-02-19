import styled from "styled-components";


export const Title = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap:  .5rem;

`

export const Connections = styled.a`

  position: relative;

  &:hover {
    .box {
      opacity: 1;
      scale: 1;
    }
  }

  .box {
    position: absolute;
    transform: translate(-50%, 0%);
    left: 50%;

    -webkit-backdrop-filter: blur(10px) saturate(100%);
    backdrop-filter: blur(10px) saturate(100%);
    background-color: #00000050;

    border: solid #ffffff50;
    padding: 1rem;
    min-width: 15rem;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: 12px;

    opacity: 0;
    transform-origin: left top;
    scale: .2;

    transition: all .5s ;

    div {
      flex: 1;
    }

    .explain {
      position: absolute;
      right: .3rem;
      top: .3rem;
      font-size: .8rem;
    }

    .name {
      font-weight: bold;
    }

    .user {
      font-size: .8rem;
    }
  }


`

interface windowSize {
  heigth: number
}

export const AboutContainer = styled.div<windowSize>`

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: ${p => (p.heigth - 70.4) + "px"};
  color: #FFF;
  user-select: none;

  padding-bottom: 5rem;
  padding-right: .5rem;

  overflow-y: auto;
  overflow-x: hidden;

  .perfil, .objetivo {
    div {
      text-align: justify;
      margin-top: .5rem;
      line-height: 1.5rem;
    }
  }

  .contato {
    > div {

      svg {
        line-height: 0;
      }

      margin-top: .7rem;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }

  @media only screen and (max-device-width: 768px) {
      font-size: .8rem;
  }

`

