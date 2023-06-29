
import "./board.sass";

import Input from "../../common/input/Input";

const Board = () => {
  return (
    <div className="board">
      <div className="board__header">
        {/* <input type="text" className="board__title" value={"Тайтл"} /> */}
        <Input initValue="Тайтл доски" />
        <div className="board__extras">
          &#9679;&#9679;&#9679;
        </div>
      </div>
      <div className="board__cards">
        <div className="card">
          <div className="card__title">Карточка 1</div>
          <div className="card__edit"></div>
        </div>
        <div className="card">
          <div className="card__title">Карточка 2</div>
        </div>
        <div className="card">
          <div className="card__title">Карточка 3</div>
        </div>
      </div>
    </div>
  )
}


export default Board;