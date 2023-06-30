
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";

import { FC } from "react";

import useLocalStorage from "../../../service/useLocalStorage";

interface IColumn {
  name: string
  idColumn: number,
  cards: {
    name: string,
    countComments: number,
    id: number,
  }[],
  addCard: ([]) => void
  setNameColumn: (newName: string) => void
}

const Column: FC<IColumn> = ({ name, idColumn, cards, addCard, setNameColumn }) => {

  return (
    <div className="column">
      <div className="column__header">
        <TextArea initValue={name} modificator="title" setValue={setNameColumn} />
      </div>
      <div className="column__cards">
        {
          cards.map(({ name, countComments, id }) => (
            id === idColumn ? <Card name={name} countComments={countComments} /> : null
          ))
        }
      </div>
      <button
        className="column__add"
        onClick={() => addCard([...cards, { name: "", countComments: 0, id: idColumn }])}>
        + Добавить карточку
      </button>
    </div>
  )
}


export default Column;