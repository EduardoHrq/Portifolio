import { Eye } from "phosphor-react";
import { CardCertificateContainer } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalCertificate } from "../modalCertificates";
import { useState } from "react";

interface ViewPosition {
  x: number
  y: number
}

export function CardCertificates() {

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

          <ModalCertificate viewPosition={viewPosition}/>
          
        </Dialog.Root>

      <img src="https://revistacarro.com.br/wp-content/uploads/2022/04/Mustang-Mach-1-2022_4.jpg" alt="img" />
      <div className="certificate-name">name</div>
    </CardCertificateContainer>
  )
}