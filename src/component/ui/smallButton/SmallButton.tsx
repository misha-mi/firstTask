
import "./smallButton.sass";

import { FC } from "react";

interface ISmallButton {
  imgPng: string
  onClick?: () => void
}

const SmallButton: FC<ISmallButton> = ({ imgPng, onClick }) => {
  return (
    <div className="small-button" onClick={onClick}>
      <img src={imgPng} alt="edit" />
    </div>
  )
}

export default SmallButton;