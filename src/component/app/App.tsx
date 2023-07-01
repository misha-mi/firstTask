
import "./app.sass";

import PopupGreeting from "../layout//popupGreeting/PopupGreeting";
import ColumnsPage from "../../pages/columnsPage/ColumnsPage";
import CardPage from "../../pages/cardPage/CardPage";

import { useState, ReactElement, createContext } from "react";

enum Page {
  greeting,
  columns,
}

interface IContext {
  openPageID: string,
  setOpenPageID: (c: string) => void
}

export const ContextPage = createContext<IContext>({
  openPageID: "-1",
  setOpenPageID: () => { },
})

function App() {

  const [page, setPage] = useState<Page>(Page.columns); // state определяющий, какя страница открыта

  const [openPageID, setOpenPageID] = useState<string>("-1");

  const acceptGreeting = () => {
    setPage(Page.columns);
  }

  let showPage: ReactElement = <PopupGreeting acceptGreeting={acceptGreeting} />;
  switch (page) {
    case 1:
      showPage = <ColumnsPage />
      break;
  }

  return (
    <div className="app">
      <ContextPage.Provider value={{ openPageID, setOpenPageID }}>
        {showPage}
        {
          openPageID !== "-1" ? (
            <div className="app__card">
              <CardPage />
            </div>
          ) : null
        }
      </ContextPage.Provider>
    </div>
  );
}

export default App;
