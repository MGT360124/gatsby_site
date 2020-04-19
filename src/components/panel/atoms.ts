import styled from "styled-components"
import { Media } from "@theme"
export const RecentContainer = styled.div`
  display: flex;
  position: sticky;
  top: 80px;
  height: 280px;
  background: white;
  margin-bottom: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`
export const RecommendContainer = styled.div`
  position: sticky;
  top: 370px;
  display: flex;
  height: 280px;
  background: white;
  margin-bottom: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`
