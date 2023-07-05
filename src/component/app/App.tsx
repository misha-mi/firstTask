
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
  openCardID: string,
  setOpenCardID: (c: string) => void
}

export const ContextPage = createContext<IContext>({
  openCardID: "-1",
  setOpenCardID: () => { },
})

function App() {

  const [name] = useLocalStorageName();

  const [page, setPage] = useState<Page>((name ? Page.columns : Page.greeting));
  const [openCardID, setOpenCardID] = useState<string>("-1");

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
      <ContextPage.Provider value={{ openCardID, setOpenCardID }}>
        {showPage}
      </ContextPage.Provider>
    </div>
  );
}

export default App;
