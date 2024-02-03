import { useDispatch, useSelector } from "react-redux";
import { getMarkColor } from "../utils/mixin";
import Container from "./utils/Container";
import Icon from "./utils/Icon";
import { blockBoard, activePlayer, setBoard } from "../reducers/gameSlice";
import { Mark, MarkComponents } from "../types/Mark";

type GameFieldProps = {
  fieldIndex: number;
  mark?: Mark;
};

const GameField = ({ mark, fieldIndex }: GameFieldProps) => {
  const dispatch = useDispatch();
  const activePlayerMark = useSelector(activePlayer);
  const boardBlocked = useSelector(blockBoard);
  const markColor = getMarkColor(mark, MarkComponents.Field);

  const setMarkHandler = () => {
    if (!mark && !boardBlocked) {
      dispatch(setBoard({ index: fieldIndex, mark: activePlayerMark }));
    }
  };

  const symbol = mark && (
    <Icon
      id={`icon-${mark}`}
      color={markColor}
      classes="w-52px h-52px sm:w-64px sm:h-64px"
    />
  );
  return (
    <Container
      classes="flex items-center min-h-105px min-w-105px sm:w-140px sm:h-140px bg-semi-dark shadow-md-dark-custom rounded-15px mx-0 justify-center"
      onClick={() => setMarkHandler()}
    >
      {symbol}
    </Container>
  );
};

export default GameField;
