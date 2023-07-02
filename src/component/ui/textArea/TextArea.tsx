
import "./textArea.sass";

import { FC, useState, FormEvent, useRef, useEffect } from "react";

interface ITextArea {
  initValue: string
  modificator?: string // модификация размеров шрифта
  mod?: boolean,
  focus?: boolean
  setValue?: (value: string) => void
}

const TextArea: FC<ITextArea> = ({ initValue, modificator = "", mod = true, focus = false, setValue }) => {

  const [valueInput, setValueInput] = useState<string>(initValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const inputTextArea = (value: string): void => {

    setValueInput(value);
    if (setValue) {
      setValue(value);
    }

    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  useEffect(() => {
    if (focus) {
      setTimeout(() => textAreaRef.current?.focus());
    }
    inputTextArea(valueInput);
  }, [mod])

  const showUI = mod ? (
    <textarea
      className={"textArea " + modificator}
      value={valueInput}
      ref={textAreaRef}
      onInput={(e: FormEvent<HTMLTextAreaElement>) => inputTextArea((e.target as HTMLTextAreaElement).value)}
      onBlur={(e) => !valueInput ? e.currentTarget.focus() : null}>
    </textarea>
  ) : <div className={"textArea__mod-false " + modificator}>{valueInput}</div>


  return (
    showUI
  )
}



export default TextArea;