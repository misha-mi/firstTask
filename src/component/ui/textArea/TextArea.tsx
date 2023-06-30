
import "./textArea.sass";

import { FC, useState, FormEvent, useRef, useEffect } from "react";

interface ITextArea {
  initValue: string
  modificator?: string // модификация размеров шрифта
  mod?: boolean
}

const TextArea: FC<ITextArea> = ({ initValue, modificator = "", mod = true }) => {

  const [valueInput, setValueInput] = useState<string>(initValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const inputTextArea = (value: string): void => {
    setValueInput(value);
    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  useEffect(() => {
    inputTextArea(valueInput);
  }, [mod])

  const showUI = mod ? (
    <textarea
      className={"textArea " + modificator}
      value={valueInput}
      ref={textAreaRef}
      onInput={(e: FormEvent<HTMLTextAreaElement>) => inputTextArea((e.target as HTMLTextAreaElement).value)} >
    </textarea>
  ) : <div className={"textArea__mod-false " + modificator}>{valueInput}</div>


  return (
    showUI
  )
}



export default TextArea;