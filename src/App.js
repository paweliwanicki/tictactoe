import { useSelector } from "react-redux";
import Container from "./components/utils/Container";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import { isPlaying } from "./reducers/gameSlice";

function App() {
  const play = useSelector(isPlaying);

  return (
    <Container classes="flex items-center max-w-full min-h-screen bg-dark mx-auto justify-center">
      {!play && <Menu />}
      {play && <GameBoard />}
    </Container>
  );
}

export default App;
