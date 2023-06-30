
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";

import { FC } from "react";

import { v4 as uuidv4 } from 'uuid';

interface IColumn {
  name: string
  id: number,
  cards: {
    name: string,
    countComments: number,
    idColumn: number,
    idCard: number
  }[],
  addCard: ([]) => void
  setNameColumn: (newName: string) => void
}

const Column: FC<IColumn> = ({ name, id, cards, addCard, setNameColumn }) => {
  return (
    <div className="column">
      <div className="column__header">
        <TextArea initValue={name} modificator="title" setValue={setNameColumn} />
      </div>
      <div className="column__cards">
        {
          cards.map(({ name, countComments, idColumn, idCard }) => (
            id === idColumn ? <Card name={name} countComments={countComments} key={idCard} idCard={idCard} /> : null
          ))
        }
      </div>
      <button
        className="column__add"
        onClick={() => addCard([...cards, { name: "", countComments: 0, idColumn: id, idCard: uuidv4() }])}>
        + Добавить карточку
      </button>
    </div>
  )
}


export default Column;