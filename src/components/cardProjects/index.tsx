// import { Eye } from "phosphor-react";
import { BoxDescription, CardProjContainer } from "./styles";
// import * as Dialog from "@radix-ui/react-dialog";
// import { ModalProject } from "../modalProject";

interface doc {
  _id: string
  title: string
  description: string
  princTech: string
  languages: string[]
  image: string
}

interface cardProps {
  doc: doc
}

export function CardProjects({doc}: cardProps) {

  return (
    <CardProjContainer>
      {/* <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="view">
            <Eye size={30} weight="bold"/>
          </div>
        </Dialog.Trigger>

        <ModalProject/>
        
      </Dialog.Root> */}
      <img src={doc.image} alt="imagem" />
      <BoxDescription>
        <div className="principal">
          {/* <SoccerBall/> */}
          {doc.princTech}
        </div>
        <div className="title">{doc.title}</div>
        <div className="desc">{doc.description}</div>
        <div className="lang">
          {doc.languages}
        </div>
      </BoxDescription>
    </CardProjContainer>
  )
}