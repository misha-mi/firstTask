
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
  onDeleteCard: () => void,
  cardData: TCard | undefined,
  columns: string[],
  modifyCardValue: (key: string, newValue: string | number) => void
}

const CardPage: FC<ICardPage> = ({ setOpenPageID, onDeleteCard, cardData, columns, modifyCardValue }) => {

  const [blockESC, setBlockESC] = useState(false);

  const pageRef = useRef(null);


  useOutsideClick(pageRef, () => setOpenPageID("-1"), blockESC);
  useClickKey("Escape", () => setOpenPageID("-1"), blockESC);

  const onDelete = () => {
    onDeleteCard()
    setOpenPageID("-1");
  }

  const columnName = cardData?.columnID !== undefined ? columns[cardData.columnID] : "!";

  return (
    <div className="card-page" ref={pageRef}>
      <div className="card-page__header">
        <TextArea
          value={cardData?.name || ""}
          CSSModifier="title"
          setValue={(value) => modifyCardValue("name", value)}
        />
        <div>
          <SmallButton
            imgPng={trash}
            onClick={onDelete}
          />
        </div>
        <div onClick={() => setOpenPageID("-1")}>
          <SmallButton imgPng={close} />
        </div>
      </div>
      <p className="card-page__info">
        <span className="card-page__column-name">Колонка: {columnName}</span>
        <span className="card-page__author">Автор: {cardData?.author} </span>
      </p>
      <div className="card-page__description">
        <Title titleText="Описание" />
        <TextArea
          value={cardData?.description || ""}
          setValue={(value) => modifyCardValue("description", value)}
        />
      </div>
      <div className="card-page__comments">
        <Comments
          setBlockESC={setBlockESC}
          idCard={cardData?.cardID || ""}
          setCountComments={modifyCardValue}
        />
      </div>
    </div>
  )
}

export default CardPage;