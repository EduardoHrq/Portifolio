import { useState } from "react";
import { PagesContainer, PerfilContainer, SideArea, SideContainer, SocialContainer } from "./styles";
import { Article, Briefcase, CaretLeft, GithubLogo, LinkedinLogo, PaperPlaneRight, Paperclip, User } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Side() {

  const [hidden, setHidden] = useState(false)

  return (
    <SideArea hidden={hidden}>
        <button className="button-close" onClick={() => {hidden ? setHidden(false) : setHidden(true)}}>
          <CaretLeft weight="bold"/>
        </button>
      <SideContainer hidden={hidden}>

        
        <PerfilContainer>
          <img src="https://i.imgur.com/MhkgpUH.png" alt="Imagem" />
          Eduardo Henrique
        </PerfilContainer>

        <PagesContainer>
          <NavLink to={"/"}>
            <User weight="fill" className="icons" />
            <div>About me</div>
          </NavLink>
          <NavLink to={"portifolio"}>
            <Briefcase weight="fill" className="icons"/>
            <div >Portifilio</div>
          </NavLink>
          <NavLink to={"certificates"}>
            <Article weight="fill"/>
            <div >Certificates</div>
          </NavLink>
          <NavLink to={"githubstats"}>
            <GithubLogo weight="fill" className="icons"/>
            <div >Github Stats</div>
          </NavLink>
          <NavLink to={"sendEmail"}>
            <PaperPlaneRight weight="fill" className="icons"/>
            <div >Send E-Mail</div>
          </NavLink>
        </PagesContainer>

        <SocialContainer>
          <a href="https://github.com/EduardoHrq" target="_blank">
            <GithubLogo color="#fff" weight="fill"/>
            <p className="context-box">Github</p>
          </a>

          <a href="https://linkedin.com/in/eduardohrq" target="_blank">
            <LinkedinLogo color="#fff" weight="fill"/>
            <p className="context-box">Linkedin</p>
          </a>

          <a href={'../../doc/EDUARDO_HENRIQUE.pdf'} download>
            <Paperclip color="#fff" weight="fill"/>
            <p className="context-box">Curriculo</p>
          </a>
        </SocialContainer>
      </SideContainer>
    </SideArea>
  )
}