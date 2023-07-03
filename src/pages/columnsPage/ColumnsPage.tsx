
import "./columnsPage.sass";

import Column from "../../component/layout/column/Column";
import TextArea from "../../component/ui/textArea/TextArea";
import CardPage from "../cardPage/CardPage";

import { FC, useContext, useEffect } from "react";
import { useLocalStorageCard, useLocalStorageName, useLocalStorageColumn, useLocalStorageComment } from "../../service/useLocalStorage";
import { ContextPage } from "../../component/app/App";



const ColumnsPage: FC = () => {

  const { openPageID, setOpenPageID } = useContext(ContextPage);
  const [nameUser, setNameUser] = useLocalStorageName("name");
  const [columns, setNewName] = useLocalStorageColumn("columns", [
    "TODO",
    "In Progress",
    "Testing",
    "Done"
  ]);
  const [cards, addValue, deleteCard, modificateCard] = useLocalStorageCard("cards");
  const [comments] = useLocalStorageComment("comment");

  const openCard = (cards.find(item => item.idCard === openPageID));

  useEffect(() => {
    console.log(comments, cards)
    cards.forEach(item => {
      const count = comments.filter(comment => item.idCard === comment.idCard).length;
      modificateCard(item.idCard, "countComments", count);
    })
  }, [])

  return (
    <div className="columns-page">
      <TextArea value={nameUser} modificator="columns-page__name" setValue={setNameUser} />
      <div className="columns-page__wrapper">
        {columns.map((item, id) => (
          <Column
            name={item}
            id={id}
            key={id}
            cards={cards}
            nameAutrhor={nameUser}
            addCard={addValue}
            setNameColumn={(newName: string): void => setNewName(id, newName)}
          />
        ))}
      </div>
      {
        openPageID !== "-1" ? (
          <div className="columns-page__cardPage">
            <CardPage
              setOpenPageID={setOpenPageID}
              deleteCard={() => deleteCard(openPageID)}
              card={openCard}
              columns={columns}
              modificate={(key: string, newValue: string | number) => modificateCard(openPageID, key, newValue)}
            />
          </div>
        ) : null
      }
    </div>
  )
}

export default ColumnsPage;