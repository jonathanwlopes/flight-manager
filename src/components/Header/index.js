import * as S from "./styles";
import { Welcome } from "../shared/Welcome";
import { CaseFixedCost } from "../shared/CaseFixedCost";

export const Header = () => {
  return (
    <S.Container className="header">
      <Welcome />
      <CaseFixedCost />
    </S.Container>
  );
};
