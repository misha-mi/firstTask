
import "./comment.sass";

import Title from "../../ui/title/Title";
import AddItem from "../addItem/AddItem";

import { FC, useState } from "react";

import { TComment } from "../../../@types/localsStorageTypes";

interface iComment {
  setBlockESC: (block: boolean) => void
  commentData: TComment,
  onDeleteComment: () => void,
  onModifyComment: (newComment: string) => void
}

const Comment: FC<iComment> = ({ setBlockESC, commentData, onDeleteComment, onModifyComment }) => {

  const [modificationMode, setModificationMode] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>(commentData.comment);

  const toggleChangeMod = (modificationMode: boolean, save?: boolean): void => {

    setBlockESC(true);
    setModificationMode(modificationMode);

    if (!modificationMode) {
      setTimeout(() => setBlockESC(modificationMode))
      save && commentText ? onModifyComment(commentText) : setCommentText(commentData.comment);
    }
  }

  const onDelete = () => {
    setBlockESC(true);
    onDeleteComment();
    setTimeout(() => setBlockESC(false));
  }

  return (
    <div className="comment">
      <Title titleText={commentData.author} />
      {modificationMode ? (
        <div className="comment__text">
          <AddItem
            value={commentText}
            setValue={(value) => setCommentText(value)}
            onAdd={() => toggleChangeMod(false, true)}
            onClose={() => toggleChangeMod(false)}
          />
        </div>
      ) : (
        <>
          <div className="comment__text">{commentText}</div>
          <button onMouseDown={() => toggleChangeMod(true)}>Изменить</button>
          <button onMouseDown={onDelete}>Удалить</button>
        </>
      )}
    </div>
  )
}

export default Comment;