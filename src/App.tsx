import Container from "./components/common/Container";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import { useGame } from "contexts/GameContext";

const App = () => {
  const { isPlaying } = useGame();

  return (
    <Container classes="flex items-center max-w-full min-h-screen bg-dark mx-auto justify-center">
      {!isPlaying ? <Menu /> : <GameBoard />}
    </Container>
  );
};

export default App;
