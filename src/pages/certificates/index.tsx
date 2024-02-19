import { useEffect, useState } from "react";
import { CardCertificates } from "../../components/cardCertificates/indes";
import { CertificatesContainer } from "./styles";

export function Certificates() {

  const [windowHeigth, setWindowHeigth] = useState<number>()

  useEffect(() => {
    // console.log(window.innerHeight);
    setWindowHeigth(window.innerHeight)

    
  }, [])
  
  window.addEventListener('resize', () => {
    if (window.innerHeight != windowHeigth)
    setWindowHeigth(window.innerHeight)
  })
  
  return (
    <CertificatesContainer resize={windowHeigth!}>
      <CardCertificates/>
      <CardCertificates/>
      <CardCertificates/>
      <CardCertificates/>
      <CardCertificates/>
      <CardCertificates/>
    </CertificatesContainer>
  )
}