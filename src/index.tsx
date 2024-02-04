import "./index.css";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import * as ReactDOM from "react-dom";
import { StrictMode } from "react";
import GameProvider from "providers/GameProvider";

ReactDOM.render(
  <StrictMode>
    <GameProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GameProvider>
  </StrictMode>,
  document.getElementById("root")
);
