import styled from "styled-components"
import { color } from "@theme"

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${color.primary};
  height: 40px;
  border-radius: 20px;
`

export const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin: 0px 5px 0px 5px;
  line-height: 26px;
`

export const Input = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  margin-left: 16px;
  :focus {
    outline: none;
  }
  color: ${color.input};
`
