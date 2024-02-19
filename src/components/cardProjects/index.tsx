// import { Eye } from "phosphor-react";
import { BoxDescription, CardProjContainer } from "./styles";
// import * as Dialog from "@radix-ui/react-dialog";
// import { ModalProject } from "../modalProject";

interface doc {
  title: string
  languages: [string]
}

interface cardProps {
  doc: doc | null
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
      <img src="https://revistacarro.com.br/wp-content/uploads/2022/04/Mustang-Mach-1-2022_4.jpg" alt="imagem" />
      <BoxDescription>
        <div className="principal">
          {/* <SoccerBall/> */}
          React
        </div>
        <div className="title">{doc ? doc.title : "fkaljdf"}</div>
        <div className="desc">Description</div>
        <div className="lang">
          {doc ? doc.title : "fkaljdf"}
        </div>
      </BoxDescription>
    </CardProjContainer>
  )
}