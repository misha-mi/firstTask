
import { useState, useEffect, Dispatch, SetStateAction } from "react";

function decode<T>(value: T) {
  return JSON.stringify(value);
}

function encode(value: string) {
  return JSON.parse(value);
}

type SetValue<T> = Dispatch<SetStateAction<T>>


function useLocalStorage<T>(key: string, initType: T, defaultValute?: T): [T, SetValue<T>] {
  const [value, setValue] = useState<T>(encode(localStorage.getItem(key) || '""') || defaultValute || []);


  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [value])

  return [value, setValue];
}

export default useLocalStorage;