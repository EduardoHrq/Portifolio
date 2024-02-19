import * as Dialog from "@radix-ui/react-dialog";
import { Close, Content, Title } from "./styles";
import { Overlay } from "../../GlobalStyle";

export function ModalProject() {
  return (
    <Dialog.Portal>
      <Overlay/>

      <Content>
        <Close/>
        <Title>
          Titulo
        </Title>

        <div className="contents">
          <img src="" alt="Image" />

          <div>
            desc
          </div>

          <div>
            lang
          </div>

          <div>
            tech
          </div>

        </div>
      </Content>

    </Dialog.Portal>
  )
}