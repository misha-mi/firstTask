import TextArea from "../../ui/textArea/TextArea"

import { FC, useRef } from "react"

import useOutsideClick from "../../../hook/useOutsideClick"

interface IAddCard {
  setNameNewCard: (name: string) => void,
  addNewCard: () => void,
  setAddBool: (addBool: boolean) => void
}

const AddCard: FC<IAddCard> = ({ setNameNewCard, addNewCard, setAddBool }) => {

  const ref = useRef(null);

  useOutsideClick(ref, () => setAddBool(false));

  return (
    <div ref={ref}>
      <TextArea initValue={""} setValue={setNameNewCard} focus={true} />
      <button
        className={"column__add"}
        onClick={() => addNewCard()}
      >
        Сохранить
      </button><button
        className={"column__add"}
        onClick={() => setAddBool(false)}
      >
        Отмена
      </button>
    </div>
  )
}

export default AddCard;