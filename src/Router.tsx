import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/default";
import { Home } from "./pages/home";
import { Portifolio } from "./pages/portifolio";
import { Certificates } from "./pages/certificates";
import { GithubStats } from "./pages/githubstats";
import { Email } from "./pages/email";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/portifolio" element={<Portifolio/>}/>
        <Route path="/certificates" element={<Certificates/>}/>
        <Route path="/githubstats" element={<GithubStats/>}/>
        <Route path="/sendEmail" element={<Email/>}/>
      </Route>
    </Routes>    
  )
}