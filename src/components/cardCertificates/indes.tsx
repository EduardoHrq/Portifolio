import { Eye } from "phosphor-react";
import { CardCertificateContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalCertificate } from "../modalCertificates";
import { useState } from "react";

interface ViewPosition {
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

interface Document {
  doc: Certificates
}

export function CardCertificates({doc}: Document) {

  const [viewPosition, setViewPosition] = useState<ViewPosition>({
    x: 0,
    y: 0,
  })

  return (
    <CardCertificateContainer>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Eye size={25} weight="fill" onClick={(element) => {

              setViewPosition({
                x: element.pageX,
                y: element.pageY,
              })
              
            }}/>
          </Dialog.Trigger>

          <ModalCertificate viewPosition={viewPosition} doc={doc}/>
          
        </Dialog.Root>

      <img src={doc.image} alt="img" />
      <div className="certificate-name">{doc.title}</div>
    </CardCertificateContainer>
  )
}