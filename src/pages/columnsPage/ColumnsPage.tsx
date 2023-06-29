
import "./columnsPage.sass";

import Column from "../../component/main/column/Column";

import { FC } from "react";

const ColumnsPage: FC = () => {
  return (
    <div className="columns-page">
      <Column />
      {/* <Board />
      <Board />
      <Board /> */}
    </div>
  )
}

export default ColumnsPage;