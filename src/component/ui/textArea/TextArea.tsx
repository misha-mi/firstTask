
import "./textArea.sass";

import { FC, FormEvent, useRef, useEffect } from "react";

interface ITextArea {
  value: string,
  CSSModifier?: string,
  modificationMode?: boolean,
  focus?: boolean,
  setValue?: (value: string) => void
}

const TextArea: FC<ITextArea> = ({ value, CSSModifier = "", modificationMode = true, focus = false, setValue }) => {

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const checkEmpty = (value: string) => {
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

    if (textAreaRef.current != null) {
      textAreaRef.current.style.height = 0 + "px";
      textAreaRef.current.style.height = textAreaRef.current?.scrollHeight + "px";
    }
  }

  const onBlur = () => {
    if (focus) {
      textAreaRef.current?.focus();
    } else {
      checkEmpty(value);
    }
  }

  useEffect(() => {
    if (focus) {
      setTimeout(() => textAreaRef.current?.focus());
    }
    inputTextArea(value);
  }, [modificationMode])

  const showUI = modificationMode ? (
    <textarea
      className={"textArea " + CSSModifier}
      value={value}
      ref={textAreaRef}
      onInput={(e: FormEvent<HTMLTextAreaElement>) => inputTextArea((e.target as HTMLTextAreaElement).value)}
      onBlur={onBlur}>
    </textarea>
  ) : <div className={"textArea__mod-false " + CSSModifier}>{value}</div>


  return (
    showUI
  )
}



export default TextArea;