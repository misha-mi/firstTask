
import "./popupEditCard.sass";

import { FC } from "react";


const PopupEditCard: FC = () => {
  return (
    <div className="popupEditCard">
      <div className="popupEditCard__item">Удалить</div>
      <div className="popupEditCard__item popupEditCard__move">Переместить</div>
      <div className="popupEditCard__item popupEditCard_pl10">2 column</div>
      <div className="popupEditCard__item popupEditCard_pl10">3 column</div>
      <div className="popupEditCard__item popupEditCard_pl10">4 column</div>
      <div className="popupEditCard__close">&times;</div>
    </div>
  )
}

export default PopupEditCard;