
import "./card.sass";
import edit from "../../../assets/edit.png";
import comment from "../../../assets/comment.png";

import { FC, useRef } from "react";

const Card: FC = () => {

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="card"
      ref={cardRef}
      onMouseEnter={() => cardRef.current?.classList.add("card__active")}
      onMouseLeave={() => cardRef.current?.classList.remove("card__active")}>
      <div className="card__title">Карточка 1</div>
      <div className="card__edit">
        <img src={edit} alt="edit" />
      </div>
      <div className="card__comment">
        <img src={comment} alt="comment" />
        <span>1</span>
      </div>
    </div>
  )
}

export default Card;