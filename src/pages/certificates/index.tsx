import { useEffect, useState } from "react";
import { CardCertificates } from "../../components/cardCertificates/indes";
import { CertificatesContainer } from "./styles";
import { api } from "../../lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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

export interface DataResponse {
  documents: Certificates[]
}

export function Certificates() {

  const [windowHeigth, setWindowHeigth] = useState<number>()
  // const [documents, setDocuments] = useState<Certificates[]>([])


  // const findAll = async () => {
  //   await api.post('find', {
  //     dataSource: "portifolio",
  //     database: "portifolio",
  //     collection: "certificate",
  //     filter: {}
  //   }).then(res => {
  //     console.log(res.data.documents)
  //     setDocuments(res.data.documents)
  //   })
  // }


  useEffect(() => {
    window.document.title = "Certificates"
    // findAll()
    setWindowHeigth(window.innerHeight)
  }, [])


  const {data: DataResponse, isLoading} = useQuery({
    queryKey: ['getCertificates'],
    queryFn: async () => {
      const data = await api.post('find', {
        dataSource: "portifolio",
        database: "portifolio",
        collection: "certificate",
        filter: {}
      }).then(res => res.data)

      return data
    },
    placeholderData: keepPreviousData
  })

  if(isLoading) {
    return null
  }

  
  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })
  
  return (
    <CertificatesContainer resize={windowHeigth!}>
      
      {DataResponse?.documents.map((doc: Certificates) => {
        return (
          <CardCertificates 
            key={doc._id}
            doc={doc}
            />
        )
      })}

    </CertificatesContainer>
  )
}