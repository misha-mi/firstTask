
import "./card.sass";
import comment from "../../../assets/comment.png";
import edit from "../../../assets/edit.png";

import PopupEditCard from "../popupEditCard/PopupEditCard";
import SmallButton from "../../ui/smallButton/SmallButton";
import { ContextPage } from "../../app/App";

import { FC, useRef, useState, useContext } from "react";

interface ICard {
  name: string;
  countComments: number
  idCard: number
}

const Card: FC<ICard> = ({ name, countComments, idCard }) => {

  const [showPopupEditCard, setShowPopupEditCard] = useState<boolean>(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const { setOpenPageID } = useContext(ContextPage);

  return (
    <div className="card" onClick={() => setOpenPageID(idCard)}>
      <div
        className="card__wrapper"
        ref={cardRef}
        onMouseEnter={() => cardRef.current?.classList.add("card__active")}
        onMouseLeave={() => cardRef.current?.classList.remove("card__active")}>

        <div className="card__title">{name}</div>

        <div className="card__edit">
          <SmallButton png={edit} />
        </div>

        <div className="card__comment">
          <img src={comment} alt="comment" />
          <span>{countComments}</span>
        </div>

      </div>

      <div className="card__popup-edit">
        <PopupEditCard />
      </div>

    </div>
  )
}

export default Card;