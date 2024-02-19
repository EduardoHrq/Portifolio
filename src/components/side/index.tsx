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
            <User size={25} weight="fill" className="icons" />
            <div>About me</div>
          </NavLink>
          <NavLink to={"portifolio"}>
            <Briefcase size={25} weight="fill" className="icons"/>
            <div >Portifilio</div>
          </NavLink>
          <NavLink to={"certificates"}>
            <Article size={25} weight="fill"/>
            <div >Certificates</div>
          </NavLink>
          <NavLink to={"githubstats"}>
            <GithubLogo size={25} weight="fill" className="icons"/>
            <div >Github Stats</div>
          </NavLink>
          <NavLink to={"sendEmail"}>
            <PaperPlaneRight size={25} weight="fill" className="icons"/>
            <div >Send E-Mail</div>
          </NavLink>
        </PagesContainer>

        <SocialContainer>
          <a href="https://github.com/EduardoHrq" target="_blank">
            <GithubLogo size={50} color="#fff" weight="fill"/>
            <p className="context-box">Github</p>
          </a>

          <a href="https://linkedin.com/in/eduardohrq" target="_blank">
            <LinkedinLogo size={50} color="#fff" weight="fill"/>
            <p className="context-box">Linkedin</p>
          </a>

          <a href={'../../doc/EDUARDO_HENRIQUE.pdf'} download>
            <Paperclip size={50} color="#fff" weight="fill"/>
            <p className="context-box">Curriculo</p>
          </a>
        </SocialContainer>
      </SideContainer>
    </SideArea>
  )
}