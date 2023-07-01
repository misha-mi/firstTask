
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";

import { FC, useState, useRef } from "react";

import { v4 as uuidv4 } from 'uuid';

interface IColumn {
  name: string
  id: number,
  cards: {
    name: string,
    countComments: number,
    idColumn: number,
    idCard: string
  }[],
  addCard: ([]) => void
  setNameColumn: (newName: string) => void
}

const Column: FC<IColumn> = ({ name, id, cards, addCard, setNameColumn }) => {

  const [addBool, setAddBool] = useState<boolean>(false);
  const [nameNewCard, setNameNewCard] = useState<string>("");

  const addNewCard = () => {
    if (nameNewCard) {
      addCard([...cards, { name: nameNewCard, countComments: 0, idColumn: id, idCard: uuidv4() }]);
      setAddBool(false);
    }
  }

  return (
    <div className="column">

      <div className="column__header">
        <TextArea initValue={name} modificator="title" setValue={setNameColumn} />
      </div>

      <div className="column__cards">
        {
          cards.map(({ name, countComments, idColumn, idCard }) => (
            id === idColumn ? (
              <Card
                name={name}
                countComments={countComments}
                key={idCard}
                idCard={idCard}
              />
            ) : null
          ))
        }

        {
          addBool ? (
            <div>
              <TextArea initValue={""} setValue={setNameNewCard} focus={true} />
              <button
                className={"column__add"}
                onClick={() => addNewCard()}
              >
                Сохранить
              </button><button
                className={"column__add"}
                onClick={() => setAddBool(false)}
              >
                Отмена
              </button>
            </div>
          ) : null
        }
      </div>

      {
        !addBool ? (
          <button
            className={"column__add"}
            onClick={() => setAddBool(true)}
          >
            + Добавить карточку
          </button>
        ) : null
      }

    </div>
  )
}


export default Column;