
import "./textArea.sass";

import { FC, FormEvent, useRef, useEffect } from "react";

interface ITextArea {
  value: string
  modificator?: string // класс css
  mod?: boolean, // переключаетель режимов (true -> textArea; false -> div)
  focus?: boolean // установка фокуса при рендере компонента
  setValue?: (value: string) => void
}

const TextArea: FC<ITextArea> = ({ value, modificator = "", mod = true, focus = false, setValue }) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const checkEmpty = (value: string) => { // проверка на пустоту и выделение пустых полей
    if (!value) {
      textAreaRef.current?.classList.add("textArea__empty")
    } else {
      textAreaRef.current?.classList.remove("textArea__empty")
    }
  }


  const inputTextArea = (value: string): void => {

    checkEmpty(value);

    if (setValue) {
      setValue(value);
    }

    if (textAreaRef.current != null) { // управление размерами поля
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  const blur = () => { // обработка сброса focus
    if (focus) {
      textAreaRef.current?.focus();
    } else {
      checkEmpty(value);
    }
  }

  useEffect(() => {
    if (focus) {
      setTimeout(() => textAreaRef.current?.focus()); // задержка перед установкой фокуса, без задержки функция blur не даст установить фокус на другое поле
    }
    inputTextArea(value); // для коррекции размеров при переключении между режимами
  }, [mod])

  const showUI = mod ? (
    <textarea
      className={"textArea " + modificator}
      value={value}
      ref={textAreaRef}
      onInput={(e: FormEvent<HTMLTextAreaElement>) => inputTextArea((e.target as HTMLTextAreaElement).value)}
      onBlur={blur}>
    </textarea>
  ) : <div className={"textArea__mod-false " + modificator}>{value}</div>


  return (
    showUI
  )
}



export default TextArea;