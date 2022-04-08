import Container from "./components/utils/Container";
import Menu from "./components/Menu";
import GameBoard from "./components/GameBoard";
import Results from "./components/Results";


function App() {
  const isPlaying = true;
  const result = true;
  return (
    <Container classes="max-w-full h-screen bg-dark">
      {isPlaying && <GameBoard />}
      {!isPlaying && result && <Results />}
      {!isPlaying && <Menu />}
    </Container>
  );
}

export default App;
