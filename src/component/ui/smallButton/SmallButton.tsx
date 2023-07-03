
import "./smallButton.sass";

import { FC } from "react";

interface ISmallButton {
  png: string
  onClick?: () => void
}

const SmallButton: FC<ISmallButton> = ({ png, onClick }) => {
  return (
    <div className="smallButton" onClick={onClick}>
      <img src={png} alt="edit" />
    </div>
  )
}

export default SmallButton;