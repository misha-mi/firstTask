
import "./comments.sass";

import Title from "../../ui/title/Title";
import Button from "../../ui/button/Button";
import Comment from "../comment/Comment";
import AddItem from "../addItem/AddItem";

import { useLocalStorageComment, useLocalStorageName } from "../../../service/useLocalStorage";

import { v4 as uuidv4 } from 'uuid';

import { FC, useState, useEffect } from "react";

interface IComments {
  setBlockESC: (block: boolean) => void,
  idCard: string,
  setCountComments: (key: string, newValue: number) => void
}

const Comments: FC<IComments> = ({ setBlockESC, idCard, setCountComments }) => {

  const [author] = useLocalStorageName();

  const [comments, onAddComment, onDeleteComment, onModifyComment] = useLocalStorageComment();

  const [addingMode, setAddingMode] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>("");

  const onAddingMode = (bool: boolean): void => {
    setAddingMode(bool);
    bool ? setBlockESC(bool) : setTimeout(() => setBlockESC(bool))
    setCommentText("");
  }

  const onAdd = () => {
    if (commentText) {
      onAddComment({ author: author, comment: commentText, cardID: idCard, commentID: uuidv4() })
      onAddingMode(false);
    }
  }

  useEffect(() => {
    const count = comments.filter(comment => idCard === comment.cardID).length;
    setCountComments("countComments", count);
  }, [comments])

  return (
    <>
      <Title titleText="Комментарии" />
      <div className="comments__add">
        {
          !addingMode ? (
            <Button
              buttonText="+ Добавить комментарий"
              onClick={() => onAddingMode(true)}
            />
          ) : (
            <AddItem
              value={commentText}
              setValue={(value) => setCommentText(value)}
              onAdd={onAdd}
              onClose={() => onAddingMode(false)}
            />
          )
        }

      </div>
      <div className="comments__wrapper">
        {comments.map(item => item.cardID === idCard ? (
          <Comment
            setBlockESC={setBlockESC}
            commentData={item}
            key={item.commentID}
            onDeleteComment={() => onDeleteComment(item.commentID)}
            onModifyComment={(value) => onModifyComment(item.commentID, value)}
          />
        ) : null)}
      </div>
    </>
  )
}

export default Comments;