import { useState } from "react";

import { Menu } from "../../components/Menu";
import { PlayArea } from "../../components/PlayArea";

export const GameWord = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <>
      {!gameStarted ? (
        <Menu onStartGame={() => setGameStarted(true)} />
      ) : (
        <PlayArea onDefeat={() => setGameStarted(false)} />
      )}
    </>
  );
};
