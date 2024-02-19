import * as Dialog from "@radix-ui/react-dialog";
import { Overlay } from "../../GlobalStyle";
import { ContentCertificate, Group, SectionGroup, Infos } from "./styles";

interface Position {
  x: number
  y: number
}

interface ViewPosition {
  viewPosition: Position
}

export function ModalCertificate({viewPosition}: ViewPosition) {

  // console.log(viewPosition);
  

  return (
    <Dialog.Portal>

      <Overlay/>

      <ContentCertificate viewPosition={viewPosition} id="certificateContent">

        <div>
          <img src="https://revistacarro.com.br/wp-content/uploads/2022/04/Mustang-Mach-1-2022_4.jpg" alt="Certificado" />
        </div>

        <Infos>
          <SectionGroup>
            <Group>
              <h3>Name:</h3>
              <div>NAME</div>
            </Group>

            <Group>
              <h3>CH:</h3>
              <div>00H</div>
            </Group>
          </SectionGroup>
          
          <SectionGroup>
            <Group>
              <h3>Empresa emissora:</h3>
              <div>empresa</div>
            </Group>

            <Group>
              <h3>Código validador:</h3>
              <div>codigo</div>
            </Group>
          </SectionGroup>

          <Group>
            <h3>Skills vistas:</h3>
            <div>skills</div>
          </Group>

          <Group>
            <h3>Link</h3>
            <div>link</div>
          </Group>
        
        
          <Dialog.Close>
            Close
          </Dialog.Close>
        </Infos>


      </ContentCertificate>
    </Dialog.Portal>
  )
}