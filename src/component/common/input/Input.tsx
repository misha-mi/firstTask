
import "./input.sass";

import { useState, FC, FormEvent } from "react";

interface IInput {
  initValue?: string
}

const Input: FC<IInput> = ({ initValue }) => {

  const [valueInput, setValueInput] = useState<string>(initValue || "Пустой");

  return (
    <input
      type="text"
      className="input"
      value={valueInput}
      onInput={(e: FormEvent<HTMLInputElement>) => setValueInput((e.target as HTMLTextAreaElement).value)} />
  )
}

export default Input;