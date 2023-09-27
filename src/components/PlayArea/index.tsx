import { useEffect, useRef } from "react";
import { img } from "../../assets/img";
import { Mario } from "../../components/Mario";
import { Pipe } from "../../components/Pipe";
import * as Style from "./styles";

interface IPlayArea {
  onDefeat: () => void;
}

export const PlayArea = ({ onDefeat }: IPlayArea) => {
  const pipeRef = useRef<HTMLImageElement | null>(null);
  const marioRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!marioRef.current || !pipeRef.current) return;

      const marioPosition = +window
        .getComputedStyle(marioRef.current!)
        .bottom.replace("px", "");

      const pipePosition = pipeRef.current.offsetLeft;

      console.log(pipePosition > 80, pipePosition < 140, marioPosition < 100);

      if (pipePosition >= 80 && pipePosition <= 140 && marioPosition < 100) {
        onDefeat();
      }
    }, 10);

    const difficultyInterval = setInterval(() => {
      if (!pipeRef.current) return;

      const newDifficulty =
        +window
          .getComputedStyle(pipeRef.current)
          .animationDuration.replace("s", "") - 0.2;

      if (newDifficulty < 0.5) return;

      pipeRef.current.style.animationDuration = `${newDifficulty}s`;
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(difficultyInterval);
    };
  }, [pipeRef, onDefeat]);

  return (
    <>
      <Style.Container>
        <Mario marioRef={marioRef} />
        <Pipe pipeRef={pipeRef} />

        <Style.Cloud src={img.clouds} alt="" />
      </Style.Container>
    </>
  );
};
