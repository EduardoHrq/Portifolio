import { useEffect, useState } from "react";
import { CardProjects } from "../../components/cardProjects";
import { PortifolioContainer } from "./styles";
import { api } from "../../lib/axios";

interface ProjectsDocument {
  _id: string
  title: string
  languages: [string]
}


export function Portifolio() {

  const [documents, setDocuments] = useState<ProjectsDocument[]>([])
  const [windowHeigth, setWindowHeigth] = useState<number>()

  const findAll = async () => {
    await api.post('find', {
      dataSource: "portifolio",
      database: "portifolio",
      collection: "project",
      filter: {}
    }).then(res => {
      console.log(res.data.documents)
      setDocuments(res.data.documents)
    })
  }

  useEffect(() => {
    findAll()
    setWindowHeigth(window.innerHeight)
    
  }, [])


  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })
  

  return (
    <PortifolioContainer resize={windowHeigth!}>
      
      {documents.map((doc) => {
        return (
          <CardProjects 
            key={doc._id}
            doc={doc}
          />
        )
      })}

      <CardProjects doc={null}/>
      <CardProjects doc={null}/>
      <CardProjects doc={null}/>
      <CardProjects doc={null}/>
      <CardProjects doc={null}/>
      <CardProjects doc={null}/>
      
    </PortifolioContainer>
  )
}