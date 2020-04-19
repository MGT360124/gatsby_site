import React from "react"
import { SearchContainer, Icon, Input } from "./atoms"
import SearchIcon from "@src/images/search.svg"

const Search = () => {
  return (
    <SearchContainer>
      <Input></Input>
      <Icon src={SearchIcon}></Icon>
    </SearchContainer>
  )
}

export default Search
