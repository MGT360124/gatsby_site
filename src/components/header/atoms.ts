import styled from 'styled-components'
import { Transition, color} from '@src/theme'
import { Link } from "gatsby"
export const HeaderWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    height: 70px;
`

export const NavList = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    flex: 1;
`

export const NavListItem = styled(Link)`
    display: flex;
    min-width: 100px;
    height: 100%;
    line-height: 70px;
    justify-content: center;
    transition: ${Transition(['background-color', 'color'])};
    text-decoration: none;
    color: ${color.panel};
    :hover {
        background-color: ${color.primary};
        color: white;
    }
`

export const SearchWrapper = styled.div`
  display: flex;
  width: 300px;
`