
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";
import AddItem from "../addItem/AddItem";
import Button from "../../ui/button/Button";

import { FC, useState } from "react";

import { v4 as uuidv4 } from 'uuid'; // для создания уникальных id

import { TCard } from "../../../@types/localsStorageTypes";

interface IColumn {
  name: string
  id: number,
  cards: TCard[],
  nameAutrhor: string
  addCard: (arr: TCard) => void
  setNameColumn: (newName: string) => void
}

const Column: FC<IColumn> = ({ name, id, cards, nameAutrhor, addCard, setNameColumn }) => {

  const [addBool, setAddBool] = useState<boolean>(false); // скрыть/показать окно добваления карточки
  const [nameNewCard, setNameNewCard] = useState<string>("");

  const onClose = () => {
    setAddBool(false);
    setNameNewCard("");
  }

  const addNewCard = () => { //запись карточки в localStorage
    if (nameNewCard) {
      addCard({ name: nameNewCard, countComments: 0, idColumn: id, idCard: uuidv4(), description: "", author: nameAutrhor });
      onClose();
    }
  }

  return (
    <div className="column">

      <div className="column__header">
        <TextArea
          value={name}
          modificator="title"
          setValue={setNameColumn}
        />
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
          !addBool ? (
            <div className="column__add">
              <Button
                value="+ Добавить карточку"
                onClick={() => setAddBool(true)}
              />
            </div>
          ) : (
            <AddItem
              value={nameNewCard}
              setValue={setNameNewCard}
              addNewItem={addNewCard}
              onClose={onClose}
            />
          )
        }
      </div>
    </div>
  )
}


export default Column;