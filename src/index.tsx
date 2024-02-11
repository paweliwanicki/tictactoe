import "./index.css";
import App from "./App";
import * as ReactDOM from "react-dom";
import { StrictMode } from "react";
import GameProvider from "providers/GameProvider";

ReactDOM.render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
  document.getElementById("root")
);
