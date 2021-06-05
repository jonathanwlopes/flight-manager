import * as S from "./styles";
import { Welcome } from "../shared/Welcome";
import { CaseFixedCost } from "../shared/CaseFixedCost";
import { AmountVariable } from "../shared/AmountVariable";
import { AmountValue } from "../shared/AmoutValue";

export const Header = () => {
  return (
    <S.Container>
      <Welcome />
      <S.WrapperCaseCost>
        <CaseFixedCost title={"Custo fixo"}>
          <AmountValue />
        </CaseFixedCost>
        <CaseFixedCost title={"Custo variável"}>
          <AmountVariable />
        </CaseFixedCost>
      </S.WrapperCaseCost>
    </S.Container>
  );
};
