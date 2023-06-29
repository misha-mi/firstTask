
import "./cardPage.sass";

import Input from "../../component/common/input/Input";

import { FC } from "react";

const CardPage: FC = () => {
  return (
    <div className="cardPage">
      <Input initValue="Тайтл картинки" />
      <p className="cardPage__info">
        <span className="cardPage__column-name">Колонка: TODO</span>
        <span className="cardPage__author">Автор: Me</span>
      </p>
      <div className="cardPage__wrapper">
        <div className="cardPage__title">Описание</div>
        <textarea className="cardPage__descr"></textarea>
      </div>
      <div className="cardPage__wrapper">
        <div className="cardPage__title">Комментарии</div>
        <textarea className="cardPage__comment-add">Добавить коммент</textarea>
        <div className="cardPage__comment">
          <div className="cardPage__comment-name">Имя</div>
          <textarea className="cardPage__comment-text">Какой-то коммент</textarea>
        </div>
      </div>
    </div>
  )
}

export default CardPage;