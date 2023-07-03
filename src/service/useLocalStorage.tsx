
import { TCard, TComment } from "../@types/localsStorageTypes";

import { useState, useEffect } from "react";

// Я не смог докнца разобраться с типизацией useLocalStorage, в итоге создал
// несколько хуков для каждого из типа данных Имя, Колонки, Карточки, карточки
// Понимаю, что здесь дублируется код...
// В дальнейшем постараюсь исправить


function decode<T>(value: T) {
  return JSON.stringify(value);
}

function encode(value: string) {
  return JSON.parse(value);
}

export const useLocalStorageName = (key: string): [
  string,
  (name: string) => void
] => {
  const [value, setValue] = useState<string>(encode(localStorage.getItem(key) || '""'));

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [value])

  return [value, setValue];
}

export const useLocalStorageColumn = (key: string, defaultValue?: string[]): [
  string[],
  (id: number, newName: string) => void
] => {

  const [value, setValue] = useState<string[]>(encode(localStorage.getItem(key) || '""') || defaultValue);

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [value])

  const setNewName = (id: number, newName: string) => {
    setValue([...value.slice(0, id), newName, ...value.slice(id + 1)]);
  }

  return [value, setNewName];
}

export const useLocalStorageCard = (key: string): [
  TCard[],
  (arr: TCard) => void,
  (idCard: string) => void,
  (idCard: string, key: string, newValue: string | number) => void
] => {
  const [value, setValue] = useState<TCard[]>(encode(localStorage.getItem(key) || '""') || []);

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [value])

  const addValue = (newItem: TCard) => {
    setValue([...value, newItem]);
  }

  const deleteValue = (idCard: string) => {
    setValue(value.filter(item => !(item.idCard === idCard)))
  }

  const modificateValue = (idCard: string, key: string, newValue: string | number) => {
    setValue(value.map(item => {
      if (item.idCard === idCard) {
        switch (key) {
          case "name":
            return { ...item, name: String(newValue) }
          case "countComments":
            return { ...item, countComments: +newValue }
          case "description":
            return { ...item, description: String(newValue) }
        }
      }
      return item;
    }))
  }

  return [value, addValue, deleteValue, modificateValue];
}

export const useLocalStorageComment = (key: string): [
  TComment[],
  (arr: TComment) => void,
  (idComment: string) => void,
  (idComment: string, newValue: string) => void
] => {
  const [value, setValue] = useState<TComment[]>(encode(localStorage.getItem(key) || '""') || []);

  useEffect(() => {
    localStorage.setItem(key, decode(value))
  }, [value])

  const addValue = (newItem: TComment) => {
    setValue([...value, newItem]);
  }

  const deleteValue = (idComment: string) => {
    setValue(value.filter(item => !(item.idComment === idComment)))
  }

  const modificateComment = (idComment: string, newValue: string) => {
    setValue(value.map(item => {
      if (item.idComment === idComment) {
        return { ...item, comment: newValue }
      }
      return item;
    }))
  }

  return [value, addValue, deleteValue, modificateComment];
}



