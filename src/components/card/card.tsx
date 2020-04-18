import React from "react"
import { CardContainer, Article, Description, Title, Img, Author, Flag, Date } from "./atoms"
import { ReactTypes } from "@src/types"
import time from "@src/images/time.svg"

const Card = ({ item }: { item: ReactTypes.CardList }) => {
  const { title, article, author, flagList, createDate } = item
  return (
    <CardContainer>
      <Title>{title}</Title>
      <Article>{article}</Article>
      <Description>
        <Img src={time}></Img>
        <Date>{createDate}</Date>
        <Author>{author}</Author>
        {flagList.map(item => (
          <Flag key={item.flag}>{item.text}</Flag>
        ))}
      </Description>
    </CardContainer>
  )
}

export default Card
