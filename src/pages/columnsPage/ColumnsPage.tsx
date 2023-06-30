
import "./columnsPage.sass";

import Column from "../../component/layout/column/Column";

import { FC } from "react";


const ColumnsPage: FC = () => {
  return (
    <div className="columns-page">
      <div className="columns-page__name">Миша</div>
      <div className="columns-page__wrapper">
        <Column />
      </div>
    </div>
  )
}

export default ColumnsPage;