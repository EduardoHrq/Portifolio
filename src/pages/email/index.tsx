import { ClipboardText, PaperPlaneRight, Trash, X } from "phosphor-react";
import { BttCopy, ButtonsToForm, FormContainer, Groups, TextEmail } from "./styles";
import { useEffect, useState } from "react";

export function Email() {

  const [textCopy, setTextCopy] = useState<string>()

  const [assunto, setAssunto] = useState<string>('')
  const [body, setBody] = useState<string>('')

  useEffect(() => {
    window.document.title = "Send E-mail"
  }, [])

  return (
    <FormContainer action={`mailto:eduardohrq.silva06@gmail.com?`}>
      <Groups>
        <label htmlFor="email">Para:</label>
        <input id="email" type="text" value={"eduardohrq.silva06@gmail.com"} disabled/>
        <BttCopy copied={textCopy} type="button" className="bttCopy" 
          onClick={() => {

            navigator.clipboard.writeText('eduardohrq.silva06@gmail.com')

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
        <input id="about" name="subject" type="text" placeholder="Assunto deste E-mail..."
        value={assunto}  onChange={input => {
          setAssunto(input.target.value)
          }} />
        <button type="button" className="bttClose" onClick={() => setAssunto("")} >
          <X size={25} weight="bold"/>
        </button>
      </Groups>

      <TextEmail>
        <textarea name="body" placeholder="Escreva aqui..." onChange={input => setBody(input.target.value)} value={body}></textarea>
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