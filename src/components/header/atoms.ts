import styled from "styled-components"
import { Transition, color, Media } from "@src/theme"
import { Link } from "gatsby"

export const HeaderWrapper = styled.div<{ pcWidth: string }>`
  display: flex;
  max-width: ${props => props.pcWidth};
  margin: 0 auto;
  height: 70px;
  ${Media.lessThan(Media.small)} {
    max-width: 100%;
  }
`

export const NavList = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  flex: 1;
`

export const NavListItem = styled(Link)`
  display: flex;
  padding: 0 20px;
  height: 100%;
  line-height: 70px;
  justify-content: center;
  transition: ${Transition(["background-color", "color"])};
  text-decoration: none;
  color: ${color.panel};
  :hover {
    background-color: ${color.primary};
    color: white;
  }
  ${Media.lessThan(Media.small)} {
    min-width: 25%;
    max-width: 25%;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  width: 300px;
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`
