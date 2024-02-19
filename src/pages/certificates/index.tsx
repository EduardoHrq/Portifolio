import { useEffect, useState } from "react";
import { CardCertificates } from "../../components/cardCertificates/indes";
import { CertificatesContainer } from "./styles";
import { api } from "../../lib/axios";

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

export function Certificates() {

  const [windowHeigth, setWindowHeigth] = useState<number>()
  const [documents, setDocuments] = useState<Certificates[]>([])


  const findAll = async () => {
    await api.post('find', {
      dataSource: "portifolio",
      database: "portifolio",
      collection: "certificate",
      filter: {}
    }).then(res => {
      console.log(res.data.documents)
      setDocuments(res.data.documents)
    })
  }


  useEffect(() => {
    window.document.title = "Certificates"
    findAll()
    setWindowHeigth(window.innerHeight)
  }, [])
  
  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })
  
  return (
    <CertificatesContainer resize={windowHeigth!}>
      
      {documents.map((doc) => {
        return (
          <CardCertificates 
            key={doc._id}
            doc={doc}/>
        )
      })}

    </CertificatesContainer>
  )
}