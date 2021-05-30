import * as S from "./styles";
import { Welcome } from "../shared/Welcome";

export const Header = () => {
  return (
    <S.Container className='header'>
      <Welcome></Welcome>
    </S.Container>
  );
};
