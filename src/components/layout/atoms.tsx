import styled from 'styled-components'
import {shadows, Media} from '@theme'

export const HeaderWrapper = styled.div`
   width: 100%;
   box-shadow: ${shadows[2]};
   position: fixed;
   top: 0;
   z-index: 100;
   background: white;
`

export const Main = styled.main<{pcWidth: string}>`
   max-width: ${props => props.pcWidth};
   margin: 70px auto 0;
   ${Media.lessThan(Media.small)} {
      max-width: 100vh;
    }
`