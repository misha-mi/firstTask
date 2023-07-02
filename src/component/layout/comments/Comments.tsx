
import "./comments.sass";

import Title from "../../ui/title/Title";
import Button from "../../ui/button/Button";
import Comment from "../comment/Comment";
import AddItem from "../addItem/AddItem";

import { FC, useState } from "react";

interface IComments {
  setBlock: (block: boolean) => void
}

const Comments: FC<IComments> = ({ setBlock }) => {

  const [addBool, setAddBool] = useState(false);

  const showAddComment = (bool: boolean): void => {
    setAddBool(bool);
    bool ? setBlock(bool) : setTimeout(() => setBlock(bool))
  }

  return (
    <>
      <Title title="Комментарии" />
      <div className="comments__add">
        {
          !addBool ? (
            <Button value="+ Добавить комментарий" onClick={() => showAddComment(true)} />
          ) : (
            <AddItem setValue={() => console.log(1)} addNewItem={() => console.log(2)} setAddBool={() => showAddComment(false)} />
          )
        }

      </div>
      <div className="comments__wrapper">
        <Comment setBlock={setBlock} />
        <Comment setBlock={setBlock} />
        <Comment setBlock={setBlock} />
        <Comment setBlock={setBlock} />
      </div>
    </>
  )
}

export default Comments;