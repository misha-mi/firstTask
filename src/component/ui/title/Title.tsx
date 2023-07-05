
import "./title.sass";

import { FC } from "react";

const Title: FC<{ titleText: string }> = ({ titleText }) => {
  return (
    <div className="title">{titleText}</div>
  )
}

export default Title;