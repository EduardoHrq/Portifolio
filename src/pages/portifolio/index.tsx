import { useEffect, useState } from "react";
import { CardProjects } from "../../components/cardProjects";
import { PortifolioContainer } from "./styles";
import { api } from "../../lib/axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export interface ProjectsDocument {
  _id: string
  title: string
  description: string
  princTech: string
  languages: string[]
  image: string
}

export interface DataResponse {
  documents: ProjectsDocument[]
}

export function Portifolio() {
  
  const [windowHeigth, setWindowHeigth] = useState<number>()

  useEffect(() => {

    window.document.title = "Projects"
    // findAll()
    setWindowHeigth(window.innerHeight)
    
  }, [])

  const {data: DataResponse, isLoading }= useQuery({
    queryKey: ['getProjects'],
    queryFn: async () => {
      const response = await api.post('find', {
        dataSource: "portifolio",
        database: "portifolio",
        collection: "project",
        filter: {},
      })

      const data = await response.data

      console.log(data);

      return data
    },
    placeholderData: keepPreviousData,
  })

  if (isLoading) {
    return null
  }

  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })
  

  return (
    <PortifolioContainer resize={windowHeigth!}>
      
      {DataResponse?.documents.map((doc: ProjectsDocument) => {
        return (
          <CardProjects 
            key={doc._id}
            doc={doc}
          />
        )
      })}
      
    </PortifolioContainer>
  )
}