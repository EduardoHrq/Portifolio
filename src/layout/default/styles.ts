import styled from "styled-components";

export const MainContent = styled.div`

  display: flex;
  width: 100%;
  height: 100%;

`

export const LayoutStyle = styled.div`

  flex: 1;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
  gap: .7rem;

  background-color: #3f3f46;
  border-radius: 12px;
  overflow: hidden;

  .main-content {
    background-color: #18181b;
    padding: 2rem;
  }

`