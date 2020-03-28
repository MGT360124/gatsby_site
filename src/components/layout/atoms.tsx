import styled from 'styled-components'
import {shadows} from '@theme'

export const HeaderWrapper = styled.div`
   width: 100%;
   box-shadow: ${shadows[2]};
   position: fixed;
   top: 0;
   z-index: 100;
   background: white;
`

export const Main = styled.main<{width: string}>`
   max-width: ${props => props.width};
   margin: 70px auto 0;
`