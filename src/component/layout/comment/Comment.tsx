
import "./comment.sass";

import Title from "../../ui/title/Title";
import TextArea from "../../ui/textArea/TextArea";

import { useState } from "react";

const Comment = () => {

  const [mod, setMod] = useState<boolean>(true); // режимы: статический, модификация
  // замена на кстом useToggle
  return (
    <div className="comment">
      <Title title="Миша" />
      <TextArea initValue="Комментарий" mod={mod} />
      <div className="comment__control">
        <button className="comment__modificate">
          {mod ? "Сохранить" : "Изменить"}
        </button>
        <button className="comment__modificate">
          {mod ? "Отмена" : "Удалить"}
        </button>
      </div>
    </div>
  )
}

export default Comment;