
export type TCard = {
  name: string,
  countComments: number,
  idColumn: number,
  idCard: string,
  description: string
  author: string
};

export type TComment = {
  author: string,
  comment: string,
  idCard: string,
  idComment: string
}
