export interface CardList {
  createDate: string
  author: string
  article: string
  flagList: FlagList[]
}

export interface FlagList {
  flag: string
  text: string
}
