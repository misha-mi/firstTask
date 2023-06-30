
import "./column.sass";

import TextArea from "../../ui/textArea/TextArea";
import Card from "../card/Card";

import { FC } from "react";

const Column: FC = () => {
  return (
    <div className="column">
      <div className="column__header">
        <TextArea initValue="Тайтл картинки" modificator="title" />
      </div>
      <div className="column__cards">
        <Card />
        <Card />
      </div>
      <button className="column__add">
        + Добавить карточку
      </button>
    </div>
  )
}


export default Column;