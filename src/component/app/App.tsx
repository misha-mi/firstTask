
import "./app.sass";

import PopupGreeting from "../../pages/popupGreeting/PopupGreeting";
import ColumnsPage from "../../pages/columnsPage/ColumnsPage";
import { useLocalStorageName } from "../../service/useLocalStorage";

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

  const [name] = useLocalStorageName("name");

  const [page, setPage] = useState<Page>((name ? Page.columns : Page.greeting));
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
      </ContextPage.Provider>
    </div>
  );
}

export default App;
