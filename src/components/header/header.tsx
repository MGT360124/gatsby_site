import { Link } from "gatsby"
import React from "react"
import {HeaderWrapper} from './atoms'
import {HeaderListItem} from '@components/layout/layout'

interface Props {
  headerList: HeaderListItem[]
}

const Header = ({headerList}: Props) => (
  <HeaderWrapper>
     <div></div>
  </HeaderWrapper>
)

export default Header
