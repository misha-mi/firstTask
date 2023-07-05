
import "./card.sass";
import comment from "../../../assets/comment.png";
import edit from "../../../assets/edit.png";

import SmallButton from "../../ui/smallButton/SmallButton";
import TextArea from "../../ui/textArea/TextArea";

import { ContextPage } from "../../app/App";

import { FC, useRef, useContext } from "react";

interface ICard {
  cardName: string;
  commentsCount: number
  cardID: string
}

const Card: FC<ICard> = ({ cardName, commentsCount, cardID }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { setOpenCardID } = useContext(ContextPage);


  return (
    <div className="card" onClick={() => cardName ? setOpenCardID(cardID) : null}>

      <div
        className="card__wrapper"
        ref={cardRef}
        onMouseEnter={() => cardRef.current?.classList.add("card__active")}
        onMouseLeave={() => cardRef.current?.classList.remove("card__active")}
      >

        <TextArea
          value={cardName}
          CSSModifier="card__title"
          modificationMode={false}
        />

        <div className="card__edit">
          <SmallButton imgPng={edit} />
        </div>

        <div className="card__comment">
          <img src={comment} alt="comment" />
          <span>{commentsCount}</span>
        </div>

      </div>
    </div>
  )
}

export default Card;