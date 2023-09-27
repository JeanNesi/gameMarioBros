import { useCallback, useEffect } from "react";
import { img } from "../../assets/img";
import * as Style from "./styles";

interface IMario {
  marioRef: React.MutableRefObject<HTMLImageElement | null>;
}

export const Mario = ({ marioRef }: IMario) => {
  const jump = useCallback(() => {
    if (!marioRef.current || marioRef.current.className === "jump") return;

    marioRef.current.className = "jump";

    setTimeout(() => {
      if (marioRef.current) marioRef.current.className = "";
    }, 500);
  }, [marioRef]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === "Space") jump();
    },
    [jump]
  );

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Style.Container>
      <img ref={marioRef} src={img.mario} alt="" />
    </Style.Container>
  );
};
