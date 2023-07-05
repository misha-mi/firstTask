import TextArea from "../../ui/textArea/TextArea"
import Button from "../../ui/button/Button";

import useOutsideClick from "../../../hook/useOutsideClick";
import useClickKey from "../../../hook/useClickKey";

import { FC, useRef } from "react"

interface IAddItem {
  value: string,
  setValue: (name: string) => void,
  onAdd: () => void,
  onClose: () => void
}

const AddItem: FC<IAddItem> = ({ value, setValue, onAdd, onClose }) => {

  const ref = useRef(null);

  useOutsideClick(ref, onClose);
  useClickKey("Escape", onClose);

  return (
    <div ref={ref}>
      <TextArea value={value} setValue={setValue} focus={true} />
      <Button buttonText={"Сохранить"} onClick={onAdd} />
      <Button buttonText={"Отмена"} onClick={onClose} />
    </div>
  )
}

export default AddItem;