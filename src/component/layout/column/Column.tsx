
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";

import { FC } from "react";

interface IColumn {
  name: string
  arrCards: {
    name: string
    countComments: number
  }[]
}

const Column: FC<IColumn> = ({ name, arrCards }) => {
  return (
    <div className="column">
      <div className="column__header">
        <TextArea initValue={name} modificator="title" />
      </div>
      <div className="column__cards">
        {
          arrCards.map(({ name, countComments }) => (
            <Card />
          ))
        }
      </div>
      <button className="column__add">
        + Добавить карточку
      </button>
    </div>
  )
}


export default Column;