import styled from "styled-components"
import { shadows, Media, color } from "@theme"

export const HeaderWrapper = styled.div`
  width: 100%;
  box-shadow: ${shadows[2]};
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;
`

export const MainContainer = styled.main`
  wdith: 100%;
  min-height: 600px;
  background-color: ${color.background};
  ${Media.lessThan(Media.small)} {
    max-height: 100vh;
  }
`

export const Main = styled.main<{ pcWidth: string }>`
  max-width: ${props => props.pcWidth};
  margin: 70px auto 0;
  padding-left: 20px;
  padding-top: 10px;
  ${Media.lessThan(Media.small)} {
    max-width: 100wh;
  }
`
