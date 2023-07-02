
import "./comment.sass";

import Title from "../../ui/title/Title";
import TextArea from "../../ui/textArea/TextArea";

import useClickKey from "../../../hook/useClickKey";
import useOutsideClick from "../../../hook/useOutsideClick";

import { FC, useState, useRef } from "react";

interface iComment {
  setBlock: (block: boolean) => void
}

const Comment: FC<iComment> = ({ setBlock }) => {

  const [mod, setMod] = useState<boolean>(false);

  const refComment = useRef(null);
  useOutsideClick(refComment, () => toggleChangeMod(false));
  useClickKey("Escape", () => toggleChangeMod(false));

  const toggleChangeMod = (bool: boolean): void => {
    setMod(bool);
    bool ? setBlock(bool) : setTimeout(() => setBlock(bool))
  }

  return (
    <div className="comment" ref={refComment}>
      <Title title="Миша" />
      <div ref={refComment}>
        <TextArea initValue="Комментарий" mod={mod} focus={mod} />
      </div>
      <div className="comment__control">
        {
          mod ? (
            <>
              <button className="comment__modificate">
                Сохранить
              </button>
              <button className="comment__modificate" onClick={() => toggleChangeMod(false)}>
                Отмена
              </button>
            </>
          ) : (
            <>
              <button className="comment__modificate" onClick={() => toggleChangeMod(true)}>
                Изменить
              </button>
              <button className="comment__modificate">
                Удалить
              </button>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Comment;