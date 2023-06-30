
import "./columnsPage.sass";

import Column from "../../component/layout/column/Column";

import { FC } from "react";


const ColumnsPage: FC = () => {

  return (
    <div className="columns-page">
      <div className="columns-page__name">Миша</div>
      <div className="columns-page__wrapper">
        <Column name="TODO" arrCards={[{ name: "Карточка", countComments: 4 }, { name: "Карточка", countComments: 4 }]} />
        <Column name="In Progress" arrCards={[{ name: "Карточка", countComments: 3 }]} />
        <Column name="Testing" arrCards={[{ name: "Карточка", countComments: 1 }]} />
        <Column name="Done" arrCards={[{ name: "Карточка", countComments: 2 }]} />
      </div>
    </div>
  )
}

export default ColumnsPage;