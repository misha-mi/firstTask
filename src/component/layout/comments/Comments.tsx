
import "./comments.sass";

import Title from "../../ui/title/Title";
import Button from "../../ui/button/Button";
import Comment from "../comment/Comment";
import AddItem from "../addItem/AddItem";

import { useLocalStorageComment, useLocalStorageName } from "../../../service/useLocalStorage";

import { v4 as uuidv4 } from 'uuid'; // для создания уникальных id

import { FC, useState, useEffect } from "react";

interface IComments {
  setBlock: (block: boolean) => void, // блокирование закрытия при нажатии вне поля и нажатии клваиши ESC
  idCard: string,
  modificateCountCard: (key: string, newValue: number) => void
}

const Comments: FC<IComments> = ({ setBlock, idCard, modificateCountCard }) => {

  const [author] = useLocalStorageName("name");

  const [comments, addComment, deleteComment, modificateComment] = useLocalStorageComment("comment");

  const [addBool, setAddBool] = useState(false);
  const [textComment, setTextComment] = useState("");

  const showAddComment = (bool: boolean): void => { // переключение между режимами (модификация/статик)
    setAddBool(bool);
    bool ? setBlock(bool) : setTimeout(() => setBlock(bool))
    setTextComment("");
  }

  const onAdd = () => {
    if (textComment) {
      addComment({ author: author, comment: textComment, idCard: idCard, idComment: uuidv4() })
      showAddComment(false);
    }
  }

  useEffect(() => {
    const count = comments.filter(comment => idCard === comment.idCard).length;
    modificateCountCard("countComments", count);
  }, [comments])

  return (
    <>
      <Title title="Комментарии" />
      <div className="comments__add">
        {
          !addBool ? (
            <Button
              value="+ Добавить комментарий"
              onClick={() => showAddComment(true)}
            />
          ) : (
            <AddItem
              value={textComment}
              setValue={(value) => setTextComment(value)}
              addNewItem={onAdd}
              onClose={() => showAddComment(false)}
            />
          )
        }

      </div>
      <div className="comments__wrapper">
        {comments.map(item => item.idCard === idCard ? (
          <Comment
            setBlock={setBlock}
            dataComment={item}
            key={item.idComment}
            onDelete={() => deleteComment(item.idComment)}
            onModificate={(value) => modificateComment(item.idComment, value)}
          />
        ) : null)}
      </div>
    </>
  )
}

export default Comments;