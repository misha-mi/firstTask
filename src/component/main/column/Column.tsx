
import "./column.sass";

import Input from "../../common/input/Input";
import Card from "../card/Card";

import { FC } from "react";

const Column: FC = () => {
  return (
    <div className="column">
      <div className="column__header">
        <Input initValue="Тайтл доски" />
        <div className="column__extras"> {/*  точки не нужны */}
          &#9679;&#9679;&#9679;
        </div>
      </div>
      <div className="column__cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <button className="column__add">
        Добавить карточку
      </button>
    </div>
  )
}


export default Column;