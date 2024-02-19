import * as Dialog from "@radix-ui/react-dialog";
import { Overlay } from "../../GlobalStyle";
import { ContentCertificate, Group, SectionGroup, Infos, Skills } from "./styles";

interface Position {
  x: number
  y: number
}

interface Certificates {
  _id: string
  title: string
  ch: number
  codigo: string
  empresa: string
  certificate: string
  skills: [string]
  image: string
}

interface Props {
  viewPosition: Position
  doc: Certificates
}

export function ModalCertificate({viewPosition, doc}: Props) {

  // console.log(viewPosition);
  

  return (
    <Dialog.Portal>

      <Overlay/>

      <ContentCertificate viewPosition={viewPosition} id="certificateContent">

        <div>
          <img src={doc.image} alt="Certificado" />
        </div>

        <Infos>
          <SectionGroup>
            <Group>
              <h3>Name:</h3>
              <div>{doc.title}</div>
            </Group>

            <Group>
              <h3>CH:</h3>
              <div>{doc.ch}</div>
            </Group>
          </SectionGroup>
          
          <SectionGroup>
            <Group>
              <h3>Empresa emissora:</h3>
              <div>{doc.empresa}</div>
            </Group>

            <Group>
              <h3>Código validador:</h3>
              <div>{doc.codigo}</div>
            </Group>
          </SectionGroup>

          <Group>
            <h3>Skills vistas:</h3>
            <Skills>{doc.skills.map((skill) => {
              return (
                <div>{skill}</div>
              )
            })}</Skills>
          </Group>

          <Group>
            <h3>Link</h3>
            <a href={doc.certificate} target="_blank">{doc.certificate}</a>
          </Group>
        
        
          <Dialog.Close>
            Close
          </Dialog.Close>
        </Infos>


      </ContentCertificate>
    </Dialog.Portal>
  )
}