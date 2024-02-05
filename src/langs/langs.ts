type Languages = 'en' | 'pl';

type LangugeKeys = {
  restartGame: string;
  yesRestart: string;
  noCancel: string;
  vsCpu: string;
  vsPlayer: string;
  quit: string;
  nextRound: string;
  roundTied: string;
  youWon: string;
  youLost: string;
  player: string;
  wins: string;
  takesRound: string;
  xGoesFirst: string;
  pick1PlayerMark: string;
  turn: string;
  you: string;
  cpu: string;
  ties: string;
};

const LANGUAGES: Record<Languages, LangugeKeys> = {
  en: {
    restartGame: 'Restart game?',
    yesRestart: 'Yes, restart',
    noCancel: 'No, cancel',
    vsCpu: 'New game (VS CPU)',
    vsPlayer: 'New game (VS PLAYER)',
    quit: 'Quit',
    nextRound: 'Next round',
    roundTied: 'Round tied',
    youWon: 'You won!',
    youLost: 'Oh no, you lost…',
    player: 'Player',
    wins: 'Wins',
    takesRound: 'Takes the round',
    xGoesFirst: 'Remember : X goes first',
    pick1PlayerMark: 'Pick players 1`s mark',
    turn: 'Turn',
    you: 'You',
    cpu: 'Cpu',
    ties: 'ties',
  },
  pl: {
    restartGame: 'Zrestartować grę?',
    yesRestart: 'Tak, zrestartuj',
    noCancel: 'Nie, anuluj',
    vsCpu: 'Nowa gra (VS Komputer)',
    vsPlayer: 'Nowa gra (VS Gracz)',
    quit: 'Wyjdź',
    nextRound: 'Następna runda',
    roundTied: 'Remis',
    youWon: 'Wygrałeś!',
    youLost: 'Oh nie, przegrałeś...',
    player: 'Gracz',
    wins: 'Wygrał',
    takesRound: 'wygrał rundę',
    xGoesFirst: 'Pamiętaj : X rozpoczyna',
    pick1PlayerMark: 'Wybierz symbol gracza 1',
    turn: 'Tura',
    you: 'Ty',
    cpu: 'Komp.',
    ties: 'Remis',
  },
} as const;

export default LANGUAGES;
