/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Header } from "../header"
import {HeaderWrapper, Main} from './atoms'
import "@src/style/global.css"


export interface HeaderListItem {
  name: string
  link: string
  icon: string
  component: React.ReactNode
}

const headerList: HeaderListItem[] = [
  {
    name: '首页',
    link: '/',
    icon: '',
    component: null
  },
  {
    name: 'react',
    link: '/react',
    icon: '',
    component: null
  },
  {
    name: 'vue',
    link: '/vue',
    icon: '',
    component: null
  },
  {
    name: '关于',
    link: '/about',
    icon: '',
    component: null
  },
]
interface Props {
  children: React.ReactNode,
  style?: React.CSSProperties
}
const pcWidth = '1200px'
const Layout = ({ children, style}: Props) => {
  return (
    <>
      <HeaderWrapper><Header pcWidth={pcWidth} headerList={headerList}/></HeaderWrapper>
      <Main pcWidth={pcWidth} style={style}>{children}</Main>
    </>
  )
}

export default Layout
