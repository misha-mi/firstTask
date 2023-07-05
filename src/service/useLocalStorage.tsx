
import { TCard, TComment } from "../@types/localsStorageTypes";

import { useState, useEffect } from "react";


function decode<T>(value: T) {
  return JSON.stringify(value);
}

function encode(value: string) {
  return JSON.parse(value);
}

export const useLocalStorageName = (): [
  string,
  (name: string) => void
] => {
  const [value, setValue] = useState<string>(encode(localStorage.getItem("name") || '""'));

  useEffect(() => {
    localStorage.setItem("name", decode(value))
  }, [value])

  return [value, setValue];
}

export const useLocalStorageColumn = (defaultValue?: string[]): [
  string[],
  (id: number, newName: string) => void
] => {

  const [value, setValue] = useState<string[]>(encode(localStorage.getItem("columns") || '""') || defaultValue);

  useEffect(() => {
    localStorage.setItem("columns", decode(value))
  }, [value])

  const setNewName = (id: number, newName: string) => {
    setValue([...value.slice(0, id), newName, ...value.slice(id + 1)]);
  }

  return [value, setNewName];
}

export const useLocalStorageCard = (): [
  TCard[],
  (arr: TCard) => void,
  (cardID: string) => void,
  (cardID: string, key: string, newValue: string | number) => void
] => {
  const [value, setValue] = useState<TCard[]>(encode(localStorage.getItem("cards") || '""') || []);

  useEffect(() => {
    localStorage.setItem("cards", decode(value))
  }, [value])

  const addCard = (newItem: TCard) => {
    setValue([...value, newItem]);
  }

  const deleteCard = (cardID: string) => {
    setValue(value.filter(item => !(item.cardID === cardID)))
  }

  const modifyCard = (cardID: string, key: string, newValue: string | number) => {
    setValue(value.map(item => {
      if (item.cardID === cardID) {
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

  return [value, addCard, deleteCard, modifyCard];
}

export const useLocalStorageComment = (): [
  TComment[],
  (arr: TComment) => void,
  (idComment: string) => void,
  (idComment: string, newValue: string) => void
] => {
  const [value, setValue] = useState<TComment[]>(encode(localStorage.getItem("comments") || '""') || []);

  useEffect(() => {
    localStorage.setItem("comments", decode(value))
  }, [value])

  const addValue = (newItem: TComment) => {
    setValue([...value, newItem]);
  }

  const deleteValue = (commentID: string) => {
    setValue(value.filter(item => !(item.commentID === commentID)))
  }

  const modifyComment = (commentID: string, newValue: string) => {
    setValue(value.map(item => {
      if (item.commentID === commentID) {
        return { ...item, comment: newValue }
      }
      return item;
    }))
  }

  return [value, addValue, deleteValue, modifyComment];
}



