
import "./cardPage.sass";
import close from "../../assets/trash.png";
import trash from "../../assets/close.png";

import TextArea from "../../component/ui/textArea/TextArea";
import SmallButton from "../../component/ui/smallButton/SmallButton";
import Title from "../../component/ui/title/Title";
import Comments from "../../component/layout/comments/Comments";
import { ContextPage } from "../../component/app/App";

import useOutsideClick from "../../hook/useOutsideClick";
import useClickKey from "../../service/useClickKey";

import { FC, useContext, useRef } from "react";

const CardPage: FC = () => {

  const { setOpenPageID } = useContext(ContextPage);

  const pageRef = useRef(null);

  useOutsideClick(pageRef, () => setOpenPageID("-1"));
  useClickKey("Escape", () => setOpenPageID("-1"));

  return (
    <div className="cardPage" ref={pageRef}>
      <div className="cardPage__header">
        <TextArea initValue="Тайтл картинки" modificator="title" />
        <div>
          <SmallButton png={trash} />
        </div>
        <div onClick={() => setOpenPageID("-1")}>
          <SmallButton png={close} />
        </div>
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