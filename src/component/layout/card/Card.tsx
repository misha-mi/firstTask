
import "./card.sass";
import comment from "../../../assets/comment.png";
import edit from "../../../assets/edit.png";


import SmallButton from "../../ui/smallButton/SmallButton";
import TextArea from "../../ui/textArea/TextArea";

import { ContextPage } from "../../app/App";

import { FC, useRef, useContext } from "react";

interface ICard {
  name: string;
  countComments: number
  idCard: string,
  mod?: boolean
  setName?: (name: string) => void
}

const Card: FC<ICard> = ({ name, countComments, idCard, mod = false, setName }) => {

  const cardRef = useRef<HTMLDivElement>(null);

  const { setOpenPageID } = useContext(ContextPage);

  return (
    <div className="card" onClick={() => name ? setOpenPageID(idCard) : null}>

      <div
        className="card__wrapper"
        ref={cardRef}
        onMouseEnter={() => cardRef.current?.classList.add("card__active")}
        onMouseLeave={() => cardRef.current?.classList.remove("card__active")}
      >

        <TextArea
          initValue={name}
          modificator="card__title"
          mod={mod}
          focus={mod ? true : false}
          setValue={setName}
        />

        {
          !mod ? (
            <>
              <div className="card__edit">
                <SmallButton png={edit} />
              </div>

              <div className="card__comment">
                <img src={comment} alt="comment" />
                <span>{countComments}</span>
              </div>
            </>
          ) : null
        }

      </div>
    </div>
  )
}

export default Card;