
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";
import AddItem from "../addItem/AddItem";
import Button from "../../ui/button/Button";

import { FC, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { TCard } from "../../../@types/localsStorageTypes";

interface IColumn {
  columnName: string
  columnIDForFilter: number,
  cardsData: TCard[],
  authorName: string
  addCard: (arr: TCard) => void
  setColumnName: (newName: string) => void
}

const Column: FC<IColumn> = ({ columnName, columnIDForFilter, cardsData, authorName, addCard, setColumnName }) => {

  const [addingMode, setAddingMode] = useState<boolean>(false);
  const [newCardName, setNewCardName] = useState<string>("");

  const onClose = () => {
    setAddingMode(false);
    setNewCardName("");
  }

  const onAddNewCard = () => {
    if (newCardName) {
      addCard({ name: newCardName, countComments: 0, columnID: columnIDForFilter, cardID: uuidv4(), description: "", author: authorName });
      onClose();
    }
  }

  return (
    <div className="column">

      <div className="column__header">
        <TextArea
          value={columnName}
          CSSModifier="title"
          setValue={setColumnName}
        />
      </div>

      <div className="column__cards">
        {
          cardsData.map(({ name, countComments, columnID, cardID }) => (
            columnID === columnIDForFilter ? (
              <Card
                cardName={name}
                commentsCount={countComments}
                key={cardID}
                cardID={cardID}
              />
            ) : null
          ))
        }

        {
          !addingMode ? (
            <div className="column__add">
              <Button
                buttonText="+ Добавить карточку"
                onClick={() => setAddingMode(true)}
              />
            </div>
          ) : (
            <AddItem
              value={newCardName}
              setValue={setNewCardName}
              onAdd={onAddNewCard}
              onClose={onClose}
            />
          )
        }
      </div>
    </div>
  )
}


export default Column;