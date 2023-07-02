
import "./button.sass";

import { FC } from "react";

interface IButton {
  value: string
  onClick: () => void
}

const Button: FC<IButton> = ({ value, onClick }) => {

  return (
    <button
      className={"button"}
      onClick={() => onClick()}
    >
      {value}
    </button>
  )
}

export default Button;