import TextArea from "../../ui/textArea/TextArea"
import Button from "../../ui/button/Button";

import useOutsideClick from "../../../hook/useOutsideClick";
import useClickKey from "../../../hook/useClickKey";

import { FC, useRef } from "react"

interface IAddItem {
  value: string,
  setValue: (name: string) => void, // ввод в state название item
  addNewItem: () => void, // добавление item в localStorage
  onClose: () => void // скрытие компонента добавления нового item
}

const AddItem: FC<IAddItem> = ({ value, setValue, addNewItem, onClose }) => {

  const ref = useRef(null);

  useOutsideClick(ref, onClose);
  useClickKey("Escape", onClose);

  return (
    <div ref={ref}>
      <TextArea value={value} setValue={setValue} focus={true} />
      <Button value={"Сохранить"} onClick={addNewItem} />
      <Button value={"Отмена"} onClick={onClose} />
    </div>
  )
}

export default AddItem;