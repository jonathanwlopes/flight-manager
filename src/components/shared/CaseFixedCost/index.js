import * as S from "./styles";
import { TiChevronRight } from "react-icons/ti";
import { Details } from "../Details";

export const CaseFixedCost = ({children, title}) => {
  return (
    <S.Container>
      <S.WrapperText>
        <TiChevronRight color="#DC143C" size="22px" cursor="pointer" />
        <S.Title>{title}</S.Title>
      </S.WrapperText>
      {children}
      <Details />
    </S.Container>
  );
};
