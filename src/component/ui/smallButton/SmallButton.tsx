
import "./smallButton.sass";

import { FC } from "react";

interface ISmallButton {
  png: string
}

const SmallButton: FC<ISmallButton> = ({ png }) => {
  return (
    <div className="smallButton">
      <img src={png} alt="edit" />
    </div>
  )
}

export default SmallButton;