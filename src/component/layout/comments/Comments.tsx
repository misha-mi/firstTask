
import "./comments.sass";

import Title from "../../ui/title/Title";
import TextArea from "../../ui/textArea/TextArea";
import Comment from "../comment/Comment";

import { FC, useRef } from "react";

const Comments: FC = () => {

  return (
    <>
      <Title title="Комментарии" />
      <div className="comments__add">
        <TextArea initValue="+ Добавить комментарий" />
        <button className="comments__post">POST</button>
      </div>
      <div className="comments__wrapper">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </>
  )
}

export default Comments;