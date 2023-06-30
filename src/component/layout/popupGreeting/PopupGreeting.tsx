
import "./popupGreeting.sass";

import { FC, useState, FormEvent } from "react";

interface IPopupGreeting {
  acceptGreeting: () => void;
}

const PopupGreeting: FC<IPopupGreeting> = ({ acceptGreeting }) => {

  const [nameUser, setNameUser] = useState<string>("");

  const accept = () => {
    localStorage.setItem("nameUser", nameUser);
    acceptGreeting();
  }

  return (
    <div className="popupGreeting">
      <div className="popupGreeting__window">
        <p className="popupGreeting__question">Привет, как тебя зовут?</p>
        <input
          type="text"
          className="popupGreeting__input"
          value={nameUser}
          onInput={(e: FormEvent<HTMLInputElement>) => setNameUser((e.target as HTMLTextAreaElement).value)} />
        <button
          className="popupGreeting__button"
          onClick={() => accept()}>Подтвердить</button>
      </div>
    </div>
  )
}

export default PopupGreeting;