import styled from "styled-components";

interface hidden {
  hidden: boolean
}

export const PerfilContainer = styled.div`

  height: 12rem;
  border-bottom: solid #00000050;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  color: #FFF;

  font-size: 1.5rem;

  img {
    background-color: black;
    width: 7rem;
    height: 7rem;
    border-radius: 99999px;
  }

  font-weight: bold;

`


export const PagesContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 0 1rem;

  a {
    overflow: hidden;
    background-color: #18181b;
    color: white;
    padding: .7rem 1rem;
    border-radius: 8px;

    text-decoration: none;

    display: flex;
    align-items: center;
    cursor: pointer;

    line-height: 0;

    gap: 1rem;

    &:hover {
      gap: 2rem;
      padding: 1rem;
      box-shadow: 0 0 0 2px #d4d4d8;
      font-weight: bold;
    }

    &:active {
      gap: 5rem;
    }

    transition: all .3s ease;
  }

`


export const SocialContainer = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-top: solid #00000050;

  a {
    line-height: 0;
    padding: .5rem 1rem;
    
    position: relative;

    &:hover {
      .context-box {
        opacity: 1;
        top: -30%;
      }
    }
  }

  .context-box {
    position: absolute;
    text-decoration: none;
    background-color: #00000050;
    color: #fff;
    font-weight: bold;
    padding: 1rem;
    border-radius: 8px;

    transform: translate(-50%, -50%);
    top: 25%;
    left: 50%;

    opacity: 0;

    transition: all .5s ease;
  }

`


export const SideContainer = styled.div<hidden>`
  position: relative;
  flex: 1;
  display: grid;

  grid-template-rows: auto 1fr 6rem;

  width: ${p => p.hidden ? "0rem" : "20rem"};
  overflow: hidden;

  background-color: #18181b25;

  transition: all .3s ease;


  @media only screen and (max-device-width: 768px) {

      
      font-size: .8rem;



    ${SocialContainer} {
      font-size: 2rem;

      p {
        font-size: .8rem;
      }
    }
  }
`

export const SideArea = styled.div<hidden>`

  position: relative;
  display: flex;
  height: 100%;
  
  
    .button-close{
      position: absolute;
      width: 2rem;
      height: 2rem;
      border: none;
      border-radius: 100%;
      outline: none;

      cursor: pointer;

      line-height: 0;
      font-size: 1.5rem;
  
      right: ${p => p.hidden ? "-1.5rem" : "-.7rem"};
      top: 2rem;
      z-index: 99;

      rotate: ${p => p.hidden ? "180deg" : "0deg"};

      transition: all .5s ease;
    }
`




