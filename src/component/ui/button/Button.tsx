
import "./button.sass";

import { FC } from "react";

interface IButton {
  buttonText: string
  onClick: () => void
}

const Button: FC<IButton> = ({ buttonText, onClick }) => {

  return (
    <button
      className={"button"}
      onClick={() => onClick()}
    >
      {buttonText}
    </button>
  )
}

export default Button;