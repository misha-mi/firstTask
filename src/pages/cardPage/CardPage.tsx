
import "./cardPage.sass";
import trash from "../../assets/trash.png";
import close from "../../assets/close.png";

import TextArea from "../../component/ui/textArea/TextArea";
import SmallButton from "../../component/ui/smallButton/SmallButton";
import Title from "../../component/ui/title/Title";
import Comments from "../../component/layout/comments/Comments";

import { FC } from "react";

const CardPage: FC = () => {
  return (
    <div className="cardPage">
      <div className="cardPage__header">
        <TextArea initValue="Тайтл картинки" modificator="title" />
        <SmallButton png={close} />
        <SmallButton png={trash} />
      </div>
      <p className="cardPage__info">
        <span className="cardPage__column-name">Колонка: TODO</span>
        <span className="cardPage__author">Автор: Me</span>
      </p>
      <div className="cardPage__description">
        <Title title="Описание" />
        <TextArea initValue={"dsfa"} />
      </div>
      <div className="cardPage__comments">
        <Comments />
      </div>
    </div>
  )
}

export default CardPage;