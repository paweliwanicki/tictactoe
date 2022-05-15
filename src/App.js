import Container from "./components/utils/Container";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import { isPlaying } from "./reducers/gameSlice";
import { useSelector } from "react-redux";

function App() {
  const play = useSelector(isPlaying);

  return (
    <Container classes="max-w-full min-h-screen bg-dark mx-auto justify-center">
      {!play && <Menu />}
      {play && <GameBoard />}
    </Container>
  );
}

export default App;
