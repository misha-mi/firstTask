
import "./title.sass";

import { FC } from "react";

const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="title">{title}</div>
  )
}

export default Title;