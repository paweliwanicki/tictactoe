import { ReactNode, useState, useMemo, useCallback } from 'react';
import {
  GameBoard,
  GameBoardStateTypes,
  GameContext,
  GameStateTypes,
  PlayerStateTypes,
} from '../contexts/GameContext';
import { GameMode } from 'types/GameMode';
import { Mark } from 'types/Mark';
import { Score } from 'types/Score';
import { Language } from 'types/Languages';
import { GameResults } from 'hooks/useGameBoardUtils';

export const CLEAR_GAMEBOARD: GameBoard = ['', '', '', '', '', '', '', '', ''];
const INIT_SCORE: Score = {
  x: 0,
  o: 0,
  ties: 0,
};

const GAMEBOARD_INIT_STATE: GameBoardStateTypes = {
  gameBoard: CLEAR_GAMEBOARD,
  blockBoard: true,
} as const;

const PLAYER_INIT_STATE: PlayerStateTypes = {
  playerMark: Mark.x,
  player2Mark: Mark.o,
  activePlayer: Mark.x,
  winnerMark: undefined,
  aiIsMoving: false,
} as const;

const GAME_INIT_STATE: GameStateTypes = {
  score: INIT_SCORE,
  isPlaying: false,
  language: Language.EN,
  gameMode: undefined,
  showResults: false,
  showSubMenu: false,
} as const;

type GameProviderProps = {
  children: ReactNode;
};

const GameProvider = ({ children }: GameProviderProps) => {
  const [gameBoardState, setGameBoardState] =
    useState<GameBoardStateTypes>(GAMEBOARD_INIT_STATE);

  const [playersState, setPlayersState] =
    useState<PlayerStateTypes>(PLAYER_INIT_STATE);

  const [gameState, setGameState] = useState<GameStateTypes>(GAME_INIT_STATE);

  const startNewGame = useCallback((gameMode: GameMode) => {
    setGameState((state) => ({
      ...state,
      gameMode,
      isPlaying: true,
      showResults: false,
    }));
    setGameBoardState({
      blockBoard: false,
      gameBoard: CLEAR_GAMEBOARD,
    });
    setPlayersState((state) => ({
      ...state,
      winnerMark: undefined,
      activePlayer: Mark.x,
    }));
  }, []);

  const setLanguage = useCallback((language: Language) => {
    setGameState((state) => ({ ...state, language }));
  }, []);

  const setGameBoard = useCallback((gameBoard: GameBoard) => {
    setGameBoardState((state) => ({ ...state, gameBoard }));
  }, []);

  const setScore = useCallback((score: Score) => {
    setGameBoardState((state) => ({ ...state, score }));
  }, []);

  const quitGame = useCallback(() => {
    setGameBoardState(GAMEBOARD_INIT_STATE);
    setPlayersState(PLAYER_INIT_STATE);
    setGameState(GAME_INIT_STATE);
  }, []);

  const setPlayerMark = useCallback((playerMark: Mark) => {
    const player2Mark = playerMark === Mark.x ? Mark.o : Mark.x;
    setPlayersState((state) => ({ ...state, playerMark, player2Mark }));
  }, []);

  const switchPlayer = useCallback((nextPlayer: Mark) => {
    setPlayersState((state) => ({
      ...state,
      activePlayer: nextPlayer,
    }));
  }, []);

  const setAiIsMoving = useCallback((aiIsMoving: boolean) => {
    setPlayersState((state) => ({ ...state, aiIsMoving }));
    setGameBoardState((state) => ({ ...state, blockBoard: aiIsMoving }));
  }, []);

  const setGameResult = useCallback(
    (result: GameResults) => {
      const newScore = { ...gameState.score };
      const isTie = result === 'TIE';
      isTie ? ++newScore.ties : ++newScore[result];
      if (!isTie) {
        setPlayersState((state) => ({
          ...state,
          winnerMark: result,
        }));
      }
      setGameState((state) => ({
        ...state,
        score: newScore,
        showResults: true,
      }));
      setGameBoardState((state) => ({
        ...state,
        blockBoard: true,
      }));
    },
    [gameState]
  );

  const value = useMemo(
    () => ({
      ...gameBoardState,
      ...gameState,
      ...playersState,
      startNewGame,
      setLanguage,
      setGameBoard,
      setPlayerMark,
      setAiIsMoving,
      switchPlayer,
      setGameResult,
      setScore,
      quitGame,
    }),
    [
      gameBoardState,
      gameState,
      playersState,
      startNewGame,
      setGameBoard,
      setPlayerMark,
      setAiIsMoving,
      switchPlayer,
      setLanguage,
      setGameResult,
      setScore,
      quitGame,
    ]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
