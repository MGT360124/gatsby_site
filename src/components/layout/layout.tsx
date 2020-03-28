/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Header } from "../header"
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
    name: '关于',
    link: '/about',
    icon: '',
    component: null
  },
]
interface Props {
  children: React.ReactNode
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header headerList={headerList}/>
      <main>{children}</main>
    </>
  )
}

export default Layout
