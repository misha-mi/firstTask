
import "./popupGreeting.sass";

import { FC, useState, FormEvent } from "react";

const PopupGreeting: FC = () => {

  const [nameUser, setNameUser] = useState<string>("");


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
          onClick={() => localStorage.setItem("nameUser", nameUser)}>Подтвердить</button>
      </div>
    </div>
  )
}

export default PopupGreeting;