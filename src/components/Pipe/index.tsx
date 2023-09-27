import { img } from "../../assets/img";
import * as Style from "./styles";

interface IPipe {
  pipeRef: React.MutableRefObject<HTMLImageElement | null>;
}

export const Pipe = ({ pipeRef }: IPipe) => {
  return (
    <Style.Container>
      <img ref={pipeRef} src={img.pipe} alt="" />
    </Style.Container>
  );
};
