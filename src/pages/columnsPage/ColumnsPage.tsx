
import "./columnsPage.sass";

import Column from "../../component/layout/column/Column";
import TextArea from "../../component/ui/textArea/TextArea";
import CardPage from "../cardPage/CardPage";

import { FC, useContext, useEffect } from "react";
import { useLocalStorageCard, useLocalStorageName, useLocalStorageColumn, useLocalStorageComment } from "../../service/useLocalStorage";
import { ContextPage } from "../../component/app/App";



const ColumnsPage: FC = () => {

  const { openCardID, setOpenCardID } = useContext(ContextPage);
  const [userName, setUserName] = useLocalStorageName();
  const [columnsName, setColumnsName] = useLocalStorageColumn([
    "TODO",
    "In Progress",
    "Testing",
    "Done"
  ]);
  const [cards, addCard, deleteCard, modifyCardValue] = useLocalStorageCard();
  const [comments] = useLocalStorageComment();

  const openCard = (cards.find(item => item.cardID === openCardID));

  useEffect(() => {
    cards.forEach(item => {
      const count = comments.filter(comment => item.cardID === comment.cardID).length;
      modifyCardValue(item.cardID, "countComments", count);
    })
  }, [])

  return (
    <div className="columns-page">
      <TextArea value={userName} CSSModifier="columns-page__name" setValue={setUserName} />
      <div className="columns-page__wrapper">
        {columnsName.map((item, id) => (
          <Column
            columnName={item}
            columnIDForFilter={id}
            key={id}
            cardsData={cards}
            authorName={userName}
            addCard={addCard}
            setColumnName={(newName: string): void => setColumnsName(id, newName)}
          />
        ))}
      </div>
      {
        openCardID !== "-1" ? (
          <div className="columns-page__cardPage">
            <CardPage
              setOpenPageID={setOpenCardID}
              onDeleteCard={() => deleteCard(openCardID)}
              cardData={openCard}
              columns={columnsName}
              modifyCardValue={(key: string, newValue: string | number) => modifyCardValue(openCardID, key, newValue)}
            />
          </div>
        ) : null
      }
    </div>
  )
}

export default ColumnsPage;