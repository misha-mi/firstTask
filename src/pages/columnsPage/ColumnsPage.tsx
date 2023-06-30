
import "./columnsPage.sass";

import Column from "../../component/layout/column/Column";
import TextArea from "../../component/ui/textArea/TextArea";
import useLocalStorage from "../../service/useLocalStorage";

import { FC } from "react";

const ColumnsPage: FC = () => {

  const [nameUser, setNameUser] = useLocalStorage("name", "");
  const [columns, setColumns] = useLocalStorage("columns", ["", ""], [
    "TODO",
    "In Progress",
    "Testing",
    "Done"
  ]);
  const [cards, setCards] = useLocalStorage("cards", [{ name: "", countComments: 0, idColumn: 0, idCard: 0 }]);

  const removeColumn = (newName: string, id: number): void => {
    setColumns([...columns.slice(0, id), newName, ...columns.slice(id + 1)]);
  }

  return (
    <div className="columns-page">
      <TextArea initValue={nameUser} modificator="columns-page__name" setValue={setNameUser} />
      <div className="columns-page__wrapper">
        {columns.map((item, id) => (
          <Column name={item} id={id} key={id} cards={cards} addCard={setCards} setNameColumn={(newName: string): void => removeColumn(newName, id)} />
        ))}
      </div>
    </div>
  )
}

export default ColumnsPage;