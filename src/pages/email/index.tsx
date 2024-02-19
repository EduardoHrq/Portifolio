import { ClipboardText, PaperPlaneRight, Trash, X } from "phosphor-react";
import { BttCopy, ButtonsToForm, FormContainer, Groups, TextEmail } from "./styles";
import { useEffect, useState } from "react";

export function Email() {

  const [textCopy, setTextCopy] = useState<string>()

  const [assunto, setAssunto] = useState<string>()
  
  useEffect(() => {
    window.document.title = "Send E-mail"
  }, [])

  return (
    <FormContainer>
      <Groups>
        <label htmlFor="email">Para:</label>
        <input id="email" type="text" value={"eduardohrq.silva06@gmail.com"} disabled/>
        <BttCopy copied={textCopy} type="button" className="bttCopy" 
          onClick={() => {
            setTextCopy("Copied!")
            setTimeout(() => {
              setTextCopy("Copy")
            }, 1000)
          }}>
          {textCopy != null ? textCopy : "Copy"}
          <ClipboardText size={25} color="#FFF" weight="fill"/>
        </BttCopy>
      </Groups>

      <Groups>
        <label htmlFor="about">Assunto:</label>
        <input id="about" type="text" placeholder="Assunto deste E-mail..."
          onChange={input => setAssunto(input.target.value)} value={assunto}/>
        <button type="button" className="bttClose" onClick={() => setAssunto("")}>
          <X size={25} weight="bold"/>
        </button>
      </Groups>

      <TextEmail>
        <textarea name="" id="" placeholder="Escreva aqui..."></textarea>
      </TextEmail>

      <ButtonsToForm>
        <button className="clear" type="reset">
          <Trash weight="fill"/>
          Clear
        </button>
        <button className="send" type="submit">
          <PaperPlaneRight weight="fill"/>
          Send
        </button>
      </ButtonsToForm>

    </FormContainer>
  )
}