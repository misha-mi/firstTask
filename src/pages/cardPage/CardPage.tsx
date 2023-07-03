
import "./cardPage.sass";
import close from "../../assets/trash.png";
import trash from "../../assets/close.png";

import TextArea from "../../component/ui/textArea/TextArea";
import SmallButton from "../../component/ui/smallButton/SmallButton";
import Title from "../../component/ui/title/Title";
import Comments from "../../component/layout/comments/Comments";

import useOutsideClick from "../../hook/useOutsideClick";
import useClickKey from "../../hook/useClickKey";

import { FC, useRef, useState } from "react";

import { TCard } from "../../@types/localsStorageTypes";

interface ICardPage {
  setOpenPageID: (pageId: string) => void,
  deleteCard: () => void,
  card: TCard | undefined,
  columns: string[],
  modificate: (key: string, newValue: string | number) => void
}

const CardPage: FC<ICardPage> = ({ setOpenPageID, deleteCard, card, columns, modificate }) => {

  const [block, setBlock] = useState(false);

  const pageRef = useRef(null);


  useOutsideClick(pageRef, () => setOpenPageID("-1"), block);
  useClickKey("Escape", () => setOpenPageID("-1"), block);

  const onDelete = () => {
    deleteCard()
    setOpenPageID("-1");
  }

  const nameColumn = card?.idColumn !== undefined ? columns[card.idColumn] : "!";

  return (
    <div className="cardPage" ref={pageRef}>
      <div className="cardPage__header">
        <TextArea
          value={card?.name || ""}
          modificator="title"
          setValue={(value) => modificate("name", value)}
        />
        <div>
          <SmallButton
            png={trash}
            onClick={onDelete}
          />
        </div>
        <div onClick={() => setOpenPageID("-1")}>
          <SmallButton png={close} />
        </div>
      </div>
      <p className="cardPage__info">
        <span className="cardPage__column-name">Колонка: {nameColumn}</span>
        <span className="cardPage__author">Автор: {card?.author} </span>
      </p>
      <div className="cardPage__description">
        <Title title="Описание" />
        <TextArea
          value={card?.description || ""}
          setValue={(value) => modificate("description", value)}
        />
      </div>
      <div className="cardPage__comments">
        <Comments
          setBlock={setBlock}
          idCard={card?.idCard || ""}
          modificateCountCard={modificate}
        />
      </div>
    </div>
  )
}

export default CardPage;