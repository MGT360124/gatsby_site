
import React from "react"
import {HeaderWrapper, NavList, NavListItem, SearchWrapper} from './atoms'
import {HeaderListItem} from '@components/layout/layout'

interface Props {
  headerList: HeaderListItem[],
  width: string
}

const Header = ({headerList, width}: Props) => (
  <HeaderWrapper width={width}>
    <NavList>
      {headerList.map(item => {
          return <NavListItem to={item.link} key={item.name}>{item.name}</NavListItem>
      })}
    </NavList>
    <SearchWrapper></SearchWrapper>
  </HeaderWrapper>
)

export default Header
