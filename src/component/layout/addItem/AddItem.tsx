import TextArea from "../../ui/textArea/TextArea"
import Button from "../../ui/button/Button";

import { FC, useRef } from "react"

import useOutsideClick from "../../../hook/useOutsideClick";
import useClickKey from "../../../hook/useClickKey";

interface IAddItem {
  setValue: (name: string) => void,
  addNewItem: () => void,
  setAddBool: (addBool: boolean) => void
}

const AddItem: FC<IAddItem> = ({ setValue, addNewItem, setAddBool }) => {

  const ref = useRef(null);

  useOutsideClick(ref, () => setAddBool(false));
  useClickKey("Escape", () => setAddBool(false));

  return (
    <div ref={ref}>
      <TextArea initValue={""} setValue={setValue} focus={true} />
      <Button value={"Сохранить"} onClick={addNewItem} />
      <Button value={"Отмена"} onClick={() => setAddBool(false)} />
    </div>
  )
}

export default AddItem;