import styled from "styled-components"
import { Media, typography, color } from "@theme"

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 80px;
  height: 280px;
  padding: 10px;
  background: white;
  margin-bottom: 10px;
  border-top: 5px solid ${color.primary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
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
  border-top: 5px solid ${color.primary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  ${Media.lessThan(Media.small)} {
    display: none;
  }
`

export const Title = styled.h4`
  height: 20px;
  border-left: 5px solid ${color.primary};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 10px;
  margin: 20px 0px;
  font-size: ${typography.textSmall};
`

export const RecentList = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  cursor: pointer;
  :hover {
    color: ${color.primary};
  }
`
