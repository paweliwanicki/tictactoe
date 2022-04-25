import Container from "./components/utils/Container";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import Results from "./components/Results";
import { isPlaying, displayResult } from "./reducers/gameSlice";
import { useSelector } from "react-redux";

function App() {
  const play = useSelector(isPlaying);
  const results = useSelector(displayResult);

  return (
    <Container classes="max-w-full min-h-screen bg-dark mx-auto justify-center">
      {!play && !results && <Menu />}
      {play && !results && <GameBoard />}
      {!play && results && <Results />}
    </Container>
  );
}

export default App;
