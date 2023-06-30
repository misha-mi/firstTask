
import "./app.sass";

import PopupGreeting from "../layout//popupGreeting/PopupGreeting";
import ColumnsPage from "../../pages/columnsPage/ColumnsPage";
import CardPage from "../../pages/cardPage/CardPage";

import { useState, ReactElement } from "react";

enum Page {
  greeting,
  columns,
  card
}

function App() {

  const [page, setPage] = useState<Page>(Page.columns); // стайте определяющий, какя страница открыта

  const acceptGreeting = () => {
    setPage(Page.columns);
  }

  const openCard = () => {
    setPage(Page.columns);
  }

  let showPage: ReactElement = <PopupGreeting acceptGreeting={acceptGreeting} />;
  switch (page) {
    case 1:
      showPage = <ColumnsPage />
      break;
    case 2:
      showPage = <CardPage />
      break;
  }

  return (
    <div className="app">
      {showPage}
    </div>
  );
}

export default App;
