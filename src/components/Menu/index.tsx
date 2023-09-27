import { img } from "../../assets/img";
import * as Style from "./styles";

interface IMenu {
  onStartGame: () => void;
}

export const Menu = ({ onStartGame }: IMenu) => {
  return (
    <Style.Container>
      <Style.Cloud src={img.clouds} alt="" />
      <Style.MenuOptionsContainer>
        <button onClick={() => onStartGame()}>Iniciar Jogo</button>
      </Style.MenuOptionsContainer>
    </Style.Container>
  );
};
