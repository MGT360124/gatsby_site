export interface CardList {
  createDate: string
  author: string
  article: string
  title: string
  flag: string
  flagList: FlagList[]
}

export interface FlagList {
  flag: string
  text: string
}
