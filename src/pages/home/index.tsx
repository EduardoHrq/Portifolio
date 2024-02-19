import { EnvelopeSimple, GithubLogo, LinkedinLogo, Phone } from "phosphor-react";
import { AboutContainer, Connections, Title } from "./styles";
import { useEffect, useState } from "react";

export function Home() {

  const [windowHeigth, setWindowHeigth] = useState<number>()

  useEffect(() => {
    window.document.title = "About Me"
    
    setWindowHeigth(window.innerHeight)
  }, [])
  
  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })

  return (
    <AboutContainer heigth={windowHeigth!}>
      <Title>
        <h1>EDUARDO HENRIQUE</h1>
        <p>Desenvolvedor FullStack</p>
      </Title>

      <div className="perfil">
        <h3>Perfil</h3>
        <div>
          &emsp; Olá, me chamo Eduardo Henrique, tenho 21 anos de idade, resido em uma cidade próxima a Brasília no Goiás, sou um jovem estudioso, criativo e que gosta ou sente-se desafiado a resolver problemas. Estou sempre estudando esta área (TI) e buscando aprimorar minhas habilidades. Atualmente, dezembro de 2023, estou cursando engenharia de software no Centro Universitário do Planalto Central Apparecido dos Santos (UNICEPLAC), Gama-DF, finalizando o 6 semestre de 8 ao todo. <br />
          &emsp; Nesta graduação pude adquirir conhecimentos acerca do ciclo de vida completo de um software e questões gerenciais e econômicas. Sendo mais específico, pude ver algoritmos, arquiteturas de rede e computadores, arquiteturas de software, sistemas operacionais, Scrum, Levantamento de requisitos, UML, POO (programação orientada a objetos), Programação (java, estrutura de dados, design patterns), Programação Web (Tomcat, Rest, HTML - CSS, Bootstrap...), Banco de dados, engenharia econômica e inovação, ainda não finalizei o curso, mas posso listar estes conhecimentos. <br />
          &emsp; Meus estudos não focam ou estão concentrados somente no curso superior, em casa busco constantemente participar de eventos, cursos, palestras e comunidades, a fim de acompanhar inovações das tecnologias. Com isso possuo certificações em Scrum (emitido pelo ScrumStudy), java (emitidos por Rocketseat e Digital innovation one), SpringBoot (emitidos por Rocketseat e Digital innovation one), React (em estudo pela Rocketseat), Linux (emitido por curso em vídeo). 
        </div>
      </div>

      <div className="contato">
        <h3>Contanto / Conexões</h3>
        <div>
          <Connections>
            <GithubLogo size={35} color="#FFF" weight="fill"/>
            <div className="box">
              <div className="explain">Github</div>
              <div className="name">
                Eduardo Henrique
              </div>
              <div className="user">
                @EduardoHrq
              </div>
            </div>
          </Connections>
          <Connections>
            <LinkedinLogo size={35} color="#FFF" weight="fill"/>
            <div className="box">
              <div className="explain">Linkedin</div>
              <div className="name">Eduardo Henrique</div>
              <div className="user">@EduardoHrq</div>
              <div className="content">72 conexões</div>
            </div>
          </Connections>
          <Connections>
            <EnvelopeSimple size={35} color="#FFF" weight="fill"/>
            <div className="box">
              <div className="explain">E-mail</div>
              <div className="name">Eduardo Henrique</div>
              <div className="user">eduardohrq.silva06@gmail.com</div>
            </div>
          </Connections>
          <Connections>
            <Phone size={35} color="#FFF" weight="fill"/>
            <div className="box">
              <div className="explain">Telefone</div>
              <div className="name">Eduardo Henrique</div>
              <div className="user">(61) 9 9911-5197</div>
            </div>
          </Connections>
        </div>
      </div>

      <div className="objetivo">
        <h3>Objetivo</h3>
        <div>
          &emsp; Estando em busca do primeiro emprego no mercado de trabalho, aceito estágio (para ganhar experiencia), mas atualmente me enquadro como júnior (desenvolvedor júnior). Me coloco à disposição para colaborar com a empresa, onde poderei aprimorar as habilidades que através de estudos possuo. Assim contribuindo para os resultados da organização, bem como, o meu desenvolvimento pessoal e profissional.
        </div>
      </div>

      
    </AboutContainer>
  )
}