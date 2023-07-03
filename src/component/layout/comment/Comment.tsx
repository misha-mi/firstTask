
import "./comment.sass";

import Title from "../../ui/title/Title";
import AddItem from "../addItem/AddItem";

import { FC, useState } from "react";

import { TComment } from "../../../@types/localsStorageTypes";

interface iComment {
  setBlock: (block: boolean) => void
  dataComment: TComment,
  onDelete: () => void,
  onModificate: (newComment: string) => void
}

const Comment: FC<iComment> = ({ setBlock, dataComment, onDelete, onModificate }) => {

  const [mod, setMod] = useState<boolean>(false);
  const [commentText, setCommentText] = useState<string>(dataComment.comment);

  const toggleChangeMod = (bool: boolean, save?: boolean): void => {

    setBlock(true);
    setMod(bool);

    if (!bool) {
      setTimeout(() => setBlock(bool))
      save && commentText ? onModificate(commentText) : setCommentText(dataComment.comment);
    }
  }

  const deleteComment = () => {
    setBlock(true);
    onDelete();
    setTimeout(() => setBlock(false));
  }

  return (
    <div className="comment">
      <Title title={dataComment.author} />
      {mod ? (
        <AddItem
          value={commentText}
          setValue={(value) => setCommentText(value)}
          addNewItem={() => toggleChangeMod(false, true)}
          onClose={() => toggleChangeMod(false)}
        />
      ) : (
        <>
          <div>{commentText}</div>
          <button onMouseDown={() => toggleChangeMod(true)}>Изменить</button>
          <button onMouseDown={deleteComment}>Удалить</button>
        </>
      )}
    </div>
  )
}

export default Comment;