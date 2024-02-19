import { Outlet } from "react-router-dom";
import { Side } from "../../components/side";
import { LayoutStyle, MainContent } from "./styles";

export function DefaultLayout() {
  return (
    
    <MainContent>
        <LayoutStyle>
          <Side />
          <div className="main-content">
            <Outlet/>
          </div>
        </LayoutStyle>
      </MainContent>

  )
}