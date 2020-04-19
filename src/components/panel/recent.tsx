import React from "react"
import { RecentContainer, Title, RecentList } from "./atoms"
import { Search } from "@components/search"
import { ReactTypes } from "@src/types"

const Recent = ({ ReactList }: { ReactList: ReactTypes.CardList[] }) => {
  return (
    <RecentContainer>
      <Search></Search>
      <Title>最新文章</Title>
      {ReactList.slice(0, 4).map((item, index) => {
        return <RecentList>{item.title}</RecentList>
      })}
    </RecentContainer>
  )
}

export default Recent
